'use client';
import React from 'react';

export default function BanquetPage() {
  return (
    <main style={{ 
      padding: '2rem',
      minHeight: '100vh',
      background: '#181818',
      color: '#F5F5F5',
    }}>
      <div style={{
        maxWidth: 800,
        margin: '0 auto',
        padding: '0 1rem',
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 300,
          color: '#FFD700',
          marginBottom: '1rem',
          textAlign: 'center',
          fontFamily: 'Inter, Arial, sans-serif',
        }}>
          Banquet & Private Events
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          color: '#CCC',
          textAlign: 'center',
          marginBottom: '2rem',
          lineHeight: 1.6,
          fontFamily: 'Inter, Arial, sans-serif',
        }}>
          Book your private event at Lamhaa Bensalem, PA. Please fill out the form below and we will contact you soon.
        </p>
        
        <form style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.5rem', 
          marginTop: '2rem',
          background: 'rgba(255,255,255,0.02)',
          padding: '2rem',
          borderRadius: '12px',
          border: '1px solid #333',
        }}>
          <input 
            type="text" 
            placeholder="Your Name" 
            required 
            style={{
              padding: '1rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid #444',
              borderRadius: '8px',
              color: '#F5F5F5',
              fontSize: '1rem',
              fontFamily: 'Inter, Arial, sans-serif',
            }}
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            required 
            style={{
              padding: '1rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid #444',
              borderRadius: '8px',
              color: '#F5F5F5',
              fontSize: '1rem',
              fontFamily: 'Inter, Arial, sans-serif',
            }}
          />
          <input 
            type="tel" 
            placeholder="Your Phone" 
            required 
            style={{
              padding: '1rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid #444',
              borderRadius: '8px',
              color: '#F5F5F5',
              fontSize: '1rem',
              fontFamily: 'Inter, Arial, sans-serif',
            }}
          />
          <input 
            type="date" 
            required 
            style={{
              padding: '1rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid #444',
              borderRadius: '8px',
              color: '#F5F5F5',
              fontSize: '1rem',
              fontFamily: 'Inter, Arial, sans-serif',
            }}
          />
          <input 
            type="number" 
            placeholder="Number of Guests" 
            min={1} 
            required 
            style={{
              padding: '1rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid #444',
              borderRadius: '8px',
              color: '#F5F5F5',
              fontSize: '1rem',
              fontFamily: 'Inter, Arial, sans-serif',
            }}
          />
          <textarea 
            placeholder="Message" 
            rows={4} 
            style={{
              padding: '1rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid #444',
              borderRadius: '8px',
              color: '#F5F5F5',
              fontSize: '1rem',
              fontFamily: 'Inter, Arial, sans-serif',
              resize: 'vertical',
            }}
          />
          <button 
            type="submit" 
            style={{ 
              padding: '1rem 2rem', 
              background: '#FFD700', 
              color: '#181818', 
              border: 'none', 
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'Inter, Arial, sans-serif',
            }}
          >
            Submit
          </button>
        </form>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          main {
            padding: 1.5rem 1rem;
          }
          h1 {
            font-size: 2.5rem !important;
            margin-bottom: 0.75rem !important;
          }
          p {
            font-size: 1.1rem !important;
            margin-bottom: 1.5rem !important;
          }
          form {
            padding: 1.5rem !important;
            gap: 1rem !important;
          }
          input, textarea {
            padding: 0.75rem !important;
            font-size: 0.95rem !important;
          }
          button {
            padding: 0.75rem 1.5rem !important;
            font-size: 1rem !important;
          }
        }
        @media (max-width: 480px) {
          main {
            padding: 1rem 0.5rem;
          }
          h1 {
            font-size: 2rem !important;
          }
          p {
            font-size: 1rem !important;
          }
          form {
            padding: 1rem !important;
          }
          input, textarea {
            padding: 0.6rem !important;
            font-size: 0.9rem !important;
          }
          button {
            padding: 0.6rem 1.2rem !important;
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </main>
  );
} 