# AAA-FrontEnd-Project2

- React + Vite (JSX)   implementing required pages like Index, Menu, Reservations, About, and Gallery.
- React Router for multi-page navigation to meet the five-page requirement cleanly.
- Fetch/Axios for API calls to the Flask backend, handling JSON responses and errors.
- Tailwind CSS:  Grid/Flexbox for responsive layouts, as specified by the UI/UX guidance in the project. (taiwind)



** 1. Set up Environment in the Terminal**

Step 1. Install Node & npm in the teminal
  #Check if you have Make sure Node.js and npm are installed. (Check with node -v and npm -v.)

Step 2. Create Project Structure  [No need to replicate if you have the folder cafefausse - just notes for myself] 
npm create vite@latest cafefausse -- -- template react
npm install  
// Install additional router axions package
npm install react-router-dom axios
// Install Tailwind CSS  https://tailwindcss.com/docs/installation/using-vite
npm install tailwindcss @tailwindcss/vite

Step 3 Run the React App 
 // Navigate to the folder 
cd cafefausse
// Install npm modules  for the app to work (for making copies and uploading them to Github we can delete this folder as is masive)
npm install
 // run dev to open the React app and obtain URL
 npm run dev


