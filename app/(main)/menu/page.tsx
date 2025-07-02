// This file will be moved to app/(main)/menu/page.tsx
'use client';

import React, { useState } from 'react';

interface MenuItem {
  name: string;
  ingredients: string;
  image: string;
}

type Location = 'Lamhaa Bensalem, PA' | 'Lamhaa Hamilton, NJ';

const menus: Record<Location, MenuItem[]> = {
  'Lamhaa Bensalem, PA': [
    {
      name: 'Grilled Salmon',
      ingredients: 'Salmon, lemon, herbs',
      image: '/file.svg',
    },
    {
      name: 'Chicken Tikka',
      ingredients: 'Chicken, spices, yogurt',
      image: '/file.svg',
    },
  ],
  'Lamhaa Hamilton, NJ': [
    {
      name: 'Paneer Masala',
      ingredients: 'Paneer, tomato, spices',
      image: '/file.svg',
    },
    {
      name: 'Lamb Curry',
      ingredients: 'Lamb, curry sauce, herbs',
      image: '/file.svg',
    },
  ],
};

export default function MenuPage() {
  const [selected, setSelected] = useState<Location>('Lamhaa Bensalem, PA');
  return (
    <main style={{ 
      padding: '2rem',
      minHeight: '100vh',
      background: '#181818',
      color: '#F5F5F5',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 1rem',
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 300,
          color: '#FFD700',
          marginBottom: '2rem',
          textAlign: 'center',
          fontFamily: 'Inter, Arial, sans-serif',
        }}>
          Menu
        </h1>
        
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {Object.keys(menus).map((loc) => (
            <button
              key={loc}
              onClick={() => setSelected(loc as Location)}
              style={{ 
                fontWeight: selected === loc ? 'bold' : 'normal',
                padding: '0.75rem 1.5rem',
                background: selected === loc ? '#FFD700' : 'transparent',
                color: selected === loc ? '#181818' : '#FFD700',
                border: '1px solid #FFD700',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontSize: '1rem',
                fontFamily: 'Inter, Arial, sans-serif',
              }}
            >
              {loc}
            </button>
          ))}
        </div>
        
        <div style={{ 
          display: 'grid', 
          gap: '2rem', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}>
          {menus[selected].map((item) => (
            <div key={item.name} style={{ 
              border: '1px solid #333', 
              borderRadius: 12, 
              padding: '1.5rem',
              background: 'rgba(255,255,255,0.02)',
              transition: 'transform 0.2s ease',
            }}>
              <img 
                src={item.image} 
                alt={item.name} 
                style={{ 
                  width: '100%', 
                  height: 200, 
                  objectFit: 'cover', 
                  marginBottom: '1rem',
                  borderRadius: '8px',
                }} 
              />
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#FFD700',
                marginBottom: '0.5rem',
                fontFamily: 'Inter, Arial, sans-serif',
              }}>
                {item.name}
              </h3>
              <p style={{
                color: '#CCC',
                fontSize: '1rem',
                lineHeight: 1.5,
                fontFamily: 'Inter, Arial, sans-serif',
              }}>
                {item.ingredients}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          main {
            padding: 1.5rem 1rem;
          }
          h1 {
            font-size: 2.5rem !important;
            margin-bottom: 1.5rem !important;
          }
          button {
            padding: 0.5rem 1rem !important;
            font-size: 0.9rem !important;
          }
          .menu-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
        @media (max-width: 480px) {
          main {
            padding: 1rem 0.5rem;
          }
          h1 {
            font-size: 2rem !important;
          }
          button {
            padding: 0.4rem 0.8rem !important;
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </main>
  );
} 