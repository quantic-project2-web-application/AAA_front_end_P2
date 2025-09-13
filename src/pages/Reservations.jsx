import React, { useState, useRef, useEffect } from 'react';
import axios from "axios";

// Function to generate time options based on selected date
const generateTimeOptions = (selectedDate) => {
  if (!selectedDate) {
    return [];
  }
  
  const date = new Date(selectedDate);
  const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  
  // Sunday: 5:00 PM - 9:00 PM (4 hours)
  // Monday-Saturday: 5:00 PM - 11:00 PM (6 hours)
  const isSunday = dayOfWeek === 0;
  const endHour = isSunday ? 21 : 23; // 9 PM for Sunday, 11 PM for weekdays
  const endMinute = isSunday ? 0 : 0; // End at :00 for both cases
  
  const timeOptions = [];
  
  // Start at 5:00 PM (17:00)
  for (let hour = 17; hour <= endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      // Stop at the exact end time
      if (hour === endHour && minute > endMinute) {
        break;
      }
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      timeOptions.push(timeString);
    }
  }
  
  return timeOptions;
};

// Reservations page data
const reservationsData = {
  hero: {
    title: "Make a Reservation",
    subtitle: "Reserve your table at Caffe Fausee for an unforgettable dining experience"
  },
  formSections: [
    {
      title: "Reservation Details",
      description: "Select your preferred date, time, and party size",
      fields: ['date', 'time', 'guests']
    },
    {
      title: "Contact Information", 
      description: "We'll use this to confirm your reservation",
      fields: ['name', 'email', 'phone']
    }
  ],
  guestOptions: Array.from({ length: 12 }, (_, i) => i + 1)
};

const ReservationsPage = () => {
  // Form state management
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    name: '',
    email: '',
    phone: ''
  })
  
  // Time options state - dynamically generated based on selected date
  const [timeOptions, setTimeOptions] = useState([])

  // Error state management
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  // Refs for focus management
  const inputRefs = useRef({
    date: React.createRef(),
    time: React.createRef(),
    guests: React.createRef(),
    name: React.createRef(),
    email: React.createRef(),
    phone: React.createRef()
  })
  
  // Track currently focused element
  const [focusedInput, setFocusedInput] = useState(null)
  
  // Get today's date in YYYY-MM-DD format for min attribute
  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
    
    // Update time options when date changes
    if (name === 'date') {
      const newTimeOptions = generateTimeOptions(value);
      setTimeOptions(newTimeOptions);
      
      // Clear time selection if it's no longer valid for the new date
      if (formData.time && !newTimeOptions.includes(formData.time)) {
        setFormData(prev => ({
          ...prev,
          time: ''
        }));
      }
      
      // Real-time date validation
      if (value) {
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
          setErrors(prev => ({
            ...prev,
            date: 'Please select today or a future date'
          }));
        } else {
          // Clear date error if valid
          if (errors.date) {
            setErrors(prev => ({
              ...prev,
              date: ''
            }));
          }
        }
      }
    }
  }

  // Set focus on input when it gains focus
  const handleFocus = (name) => {
    setFocusedInput(name)
  }

  // Restore focus after render if needed
  useEffect(() => {
    if (focusedInput && inputRefs.current[focusedInput]?.current) {
      inputRefs.current[focusedInput].current.focus()
    }
  })
  
  // Initialize time options when date is selected
  useEffect(() => {
    if (formData.date) {
      const newTimeOptions = generateTimeOptions(formData.date);
      setTimeOptions(newTimeOptions);
    } else {
      setTimeOptions([]);
    }
  }, [formData.date])

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
  }

  // Form validation
  const validateForm = () => {
    const newErrors = {}

    // Required field validation
    if (!formData.date.trim()) newErrors.date = 'Date is required'
    if (!formData.time.trim()) newErrors.time = 'Time is required'
    if (!formData.guests.trim()) newErrors.guests = 'Number of guests is required'
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    // Phone number is optional - no required validation

    // Format validation
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    // Date validation (cannot be in the past)
    if (formData.date) {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      // Check if date is in the past
      if (selectedDate < today) {
        newErrors.date = 'Please select today or a future date'
      }
      
      // Additional check for invalid date
      if (isNaN(selectedDate.getTime())) {
        newErrors.date = 'Please enter a valid date'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const dateTime = `${formData.date}T${formData.time}:00`;

      const payload = {
        name: formData.name,
        email: formData.email,
        guests: parseInt(formData.guests, 10),
        phone: formData.phone,
        time_slot: dateTime,
      };

      const resp = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/reservations/`,
        payload
      );

      if (resp.status === 201 || resp.status === 200) {
        console.log("Reservation created!", resp.data);
        setIsSubmitted(true);

        // reset form after 3 sec
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            date: '',
            time: '',
            guests: '',
            name: '',
            email: '',
            phone: ''
          });
        }, 3000);
      } else {
        console.error("Reservation failed", resp);
      }
    } catch (err) {
      console.error("Reservation failed:", err.response?.data || err.message);
    }
  };

  // Reusable Form Input Component
  const FormInput = ({ type, id, name, value, onChange, placeholder, error, required, options, min }) => (
    <div style={{ marginBottom: 24 }}>
      <label 
        htmlFor={id} 
        style={{ 
          display: 'block', 
          fontSize: 14, 
          fontWeight: 500, 
          color: '#374151', 
          marginBottom: 8 
        }}
      >
        {placeholder} {required && '*'}
      </label>
      {type === 'select' ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          ref={inputRefs.current[name]}
          style={{
            width: '100%',
            padding: '12px 16px',
            border: `2px solid ${error ? '#ef4444' : '#d1d5db'}`,
            borderRadius: 8,
            fontSize: 16,
            backgroundColor: 'white',
            transition: 'border-color 0.3s ease',
            outline: 'none'
          }}
          onFocus={(e) => {
            handleFocus(name);
            e.target.style.borderColor = '#6E181E';
          }}
          onBlur={(e) => {
            setFocusedInput(null);
            e.target.style.borderColor = error ? '#ef4444' : '#d1d5db';
          }}
        >
          <option value="">Select {placeholder.toLowerCase()}</option>
          {options?.map((option) => (
            <option key={option} value={option}>
              {typeof option === 'number' ? `${option} ${option === 1 ? 'Guest' : 'Guests'}` : option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          ref={inputRefs.current[name]}
          placeholder={placeholder}
          min={min}
          style={{
            width: '100%',
            padding: '12px 16px',
            border: `2px solid ${error ? '#ef4444' : '#d1d5db'}`,
            borderRadius: 8,
            fontSize: 16,
            backgroundColor: 'white',
            transition: 'border-color 0.3s ease',
            outline: 'none'
          }}
          onFocus={(e) => {
            handleFocus(name);
            e.target.style.borderColor = '#6E181E';
          }}
          onBlur={(e) => {
            setFocusedInput(null);
            e.target.style.borderColor = error ? '#ef4444' : '#d1d5db';
          }}
        />
      )}
      {error && (
        <p style={{ 
          color: '#ef4444', 
          fontSize: 14, 
          marginTop: 4 
        }} role="alert">
          {error}
        </p>
      )}
    </div>
  );

  // Reusable Form Section Component
  const FormSection = ({ title, description, children }) => (
    <div style={{ 
      display: 'flex', 
      gap: 48, 
      marginBottom: 48,
      alignItems: 'flex-start'
    }}>
      {/* Text Section */}
      <div style={{ 
        flex: '0 0 300px',
        padding: '24px 0'
      }}>
        <h3 style={{ 
          fontSize: 24, 
          fontWeight: 600, 
          color: '#6E181E', 
          marginBottom: 12 
        }}>
          {title}
        </h3>
        <p style={{ 
          color: '#6b7280', 
          fontSize: 16, 
          lineHeight: 1.6 
        }}>
          {description}
        </p>
      </div>
      
      {/* Form Fields Section */}
      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );

  return (
    <main className="reservations-page" style={{ maxWidth: 1000, margin: '0 auto', padding: 32 }}>
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <h1 style={{ 
          fontSize: 48, 
          fontWeight: 700, 
          marginBottom: 16, 
          color: '#6E181E' 
        }}>
          {reservationsData.hero.title}
        </h1>
        <p style={{ 
          fontSize: 18, 
          color: '#6b7280', 
          maxWidth: 600, 
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          {reservationsData.hero.subtitle}
        </p>
      </div>

      {/* Success Message */}
      {isSubmitted && (
        <div style={{ 
          backgroundColor: '#dcfce7', 
          border: '1px solid #16a34a', 
          color: '#166534', 
          padding: 24, 
          borderRadius: 12, 
          textAlign: 'center', 
          marginBottom: 32 
        }}>
          <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            Reservation Confirmed!
          </h3>
          <p style={{ fontSize: 16 }}>
            Thank you for choosing Caffe Fausee. We'll contact you shortly to confirm your reservation.
          </p>
        </div>
      )}

      {/* Reservation Form */}
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: 16, 
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)', 
        padding: 48 
      }}>
        <form onSubmit={handleSubmit}>
          
          {/* Reservation Details Section */}
          <FormSection 
            title={reservationsData.formSections[0].title}
            description={reservationsData.formSections[0].description}
          >
            <div style={{ display: 'flex', gap: 24 }}>
              <div style={{ flex: 1 }}>
                <FormInput
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  placeholder="Date"
                  error={errors.date}
                  required
                  min={getTodayDate()}
                />
              </div>
              <div style={{ flex: 1 }}>
                <FormInput
                  type="select"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  placeholder={formData.date ? "Time" : "Select date first"}
                  error={errors.time}
                  required
                  options={timeOptions}
                />
              </div>
            </div>
            <FormInput
              type="select"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              placeholder="Number of Guests"
              error={errors.guests}
              required
              options={reservationsData.guestOptions}
            />
          </FormSection>

          {/* Contact Information Section */}
          <FormSection 
            title={reservationsData.formSections[1].title}
            description={reservationsData.formSections[1].description}
          >
            <div style={{ display: 'flex', gap: 24 }}>
              <div style={{ flex: 1 }}>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  error={errors.name}
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  error={errors.email}
                  required
                />
              </div>
            </div>
            <FormInput
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number (Optional)"
              error={errors.phone}
            />
          </FormSection>

          {/* Submit Button */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: 48 
          }}>
            <button
              type="submit"
              style={{
                backgroundColor: '#6E181E',
                color: 'white',
                padding: '16px 48px',
                border: 'none',
                borderRadius: 12,
                fontSize: 18,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 4px 12px rgba(110, 24, 30, 0.3)',
                minWidth: 200
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#5a1419';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 16px rgba(110, 24, 30, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#6E181E';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(110, 24, 30, 0.3)';
              }}
              disabled={isSubmitted}
            >
              {isSubmitted ? 'Reservation Submitted!' : 'Reserve Table'}
            </button>
          </div>

          {/* Additional Information */}
          <div style={{ 
            textAlign: 'center', 
            marginTop: 32, 
            paddingTop: 24, 
            borderTop: '1px solid #e5e7eb' 
          }}>
            <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 8 }}>
              * Required fields. Phone number is optional. We'll contact you within 24 hours to confirm your reservation.
            </p>
            <p style={{ color: '#6b7280', fontSize: 14 }}>
              For special requests or large parties (8+ guests), please call us directly.
            </p>
          </div>
        </form>
      </div>
    </main>
  )
}

export default ReservationsPage;