import React from 'react'



const menu = [
  {
    category: 'Starters',
    items: [
      {
        name: 'Bruschetta',
        description: 'Fresh tomatoes, basil, olive oil, and toasted baguette slices',
        price: 8.50
      },
      {
        name: 'Caesar Salad',
        description: 'Crisp romaine with homemade Caesar dressing',
        price: 9.00
      }
    ]
  },
  {
    category: 'Main Courses',
    items: [
      {
        name: 'Grilled Salmon',
        description: 'Served with lemon butter sauce and seasonal vegetables',
        price: 22.00
      },
      {
        name: 'Ribeye Steak',
        description: '12 oz prime cut with garlic mashed potatoes',
        price: 28.00
      },
      {
        name: 'Vegetable Risotto',
        description: 'Creamy Arborio rice with wild mushrooms',
        price: 18.00
      }
    ]
  },
  {
    category: 'Desserts',
    items: [
      {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with mascarpone',
        price: 7.50
      },
      {
        name: 'Cheesecake',
        description: 'Creamy cheesecake with berry compote',
        price: 7.00
      }
    ]
  },
  {
    category: 'Beverages',
    items: [
      {
        name: 'Red Wine (Glass)',
        description: 'A selection of Italian reds',
        price: 10.00
      },
      {
        name: 'White Wine (Glass)',
        description: 'Crisp and refreshing',
        price: 9.00
      },
      {
        name: 'Craft Beer',
        description: 'Local artisan brews',
        price: 6.00
      },
      {
        name: 'Espresso',
        description: 'Strong and aromatic',
        price: 3.00
      }
    ]
  }
];

// UI: Clean, readable, responsive
const MenuPage = () => (
  <main className="menu-page" style={{ maxWidth: 700, margin: '0 auto', padding: 32 }}>
    <h1 style={{ textAlign: 'center', marginBottom: 40, fontSize: 18 }}>Café Fausse Menu</h1>
    {menu.map((section) => (
      <section key={section.category} style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18 }}>{section.category}</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {section.items.map((item) => (
            <li key={item.name} style={{ marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <span style={{ fontWeight: 600, fontSize: 18 }}>{item.name}</span>
                <span style={{ marginLeft: 10, color: '#777', fontSize: 18 }}>{item.description}</span>
              </div>
              <span style={{ fontWeight: 500, fontSize: 18 }}>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </section>
    ))}
  </main>
);

export default MenuPage;

