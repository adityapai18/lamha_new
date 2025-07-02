// This file will be moved to app/(main)/locations/page.tsx
'use client';
import React, { useEffect, useState } from 'react';

const locations = [
  {
    name: 'Lamhaa Bensalem, PA',
    address: '123 Main St, Bensalem, PA',
    hours: 'Mon-Sun: 11am - 10pm',
    contact: '(555) 123-4567',
    hasBanquet: true,
    images: [
      '/location1.jpg',
      '/location2.jpg',
      '/location3.jpg',
    ],
  },
  {
    name: 'Lamhaa Hamilton, NJ',
    address: '456 Oak Ave, Hamilton, NJ',
    hours: 'Mon-Sun: 11am - 10pm',
    contact: '(555) 987-6543',
    hasBanquet: false,
    images: [
      '/location2.jpg',
      '/location3.jpg',
      '/location4.jpg',
    ],
  },
];

function Slideshow({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);
  return (
    <div style={{
      width: '100%',
      position: 'relative',
      paddingTop: '56.25%', // 16:9 aspect ratio
      marginBottom: 32,
      background: '#181818',
      borderRadius: 16,
      overflow: 'hidden',
    }}>
      <img
        src={images[index]}
        alt="Gallery"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'opacity 1s ease-in-out',
        }}
      />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '60%',
        background: 'linear-gradient(transparent, rgba(24, 24, 24, 0.8))',
        pointerEvents: 'none',
      }} />
    </div>
  );
}

export default function LocationsPage() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#181818',
      padding: '80px 24px 40px',
      fontFamily: 'Geist, Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: 80,
          padding: '0 24px'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 300,
            color: '#F5F5F5',
            marginBottom: 16,
            letterSpacing: '-0.02em',
            fontFamily: 'Geist, Arial, sans-serif'
          }}>
            Our Locations
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: '#C2A14D',
            fontWeight: 400,
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Experience authentic Indian cuisine in our carefully designed spaces
          </p>
        </div>

        {/* Locations Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 48,
          marginBottom: 80
        }}>
          {locations.map((loc, index) => (
            <section
              key={loc.name}
              style={{
                background: 'transparent',
                borderRadius: 0,
                padding: 0,
                marginBottom: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
              }}
            >
              <Slideshow images={loc.images} />
              
              <div style={{
                padding: '0 8px'
              }}>
                <h2 style={{ 
                  fontSize: '2rem',
                  fontWeight: 300,
                  color: '#F5F5F5',
                  marginBottom: 24,
                  letterSpacing: '-0.01em',
                  fontFamily: 'Geist, Arial, sans-serif'
                }}>
                  {loc.name}
                </h2>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12
                  }}>
                    <span style={{
                      width: 4,
                      height: 4,
                      backgroundColor: '#C2A14D',
                      borderRadius: '50%'
                    }} />
                    <span style={{
                      color: '#F5F5F5',
                      fontSize: '1rem',
                      fontWeight: 400
                    }}>
                      {loc.address}
                    </span>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12
                  }}>
                    <span style={{
                      width: 4,
                      height: 4,
                      backgroundColor: '#C2A14D',
                      borderRadius: '50%'
                    }} />
                    <span style={{
                      color: '#F5F5F5',
                      fontSize: '1rem',
                      fontWeight: 400
                    }}>
                      {loc.hours}
                    </span>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12
                  }}>
                    <span style={{
                      width: 4,
                      height: 4,
                      backgroundColor: '#C2A14D',
                      borderRadius: '50%'
                    }} />
                    <span style={{
                      color: '#F5F5F5',
                      fontSize: '1rem',
                      fontWeight: 400
                    }}>
                      {loc.contact}
                    </span>
                  </div>
                  
                  {loc.hasBanquet && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginTop: 8
                    }}>
                      <span style={{
                        width: 4,
                        height: 4,
                        backgroundColor: '#C2A14D',
                        borderRadius: '50%'
                      }} />
                      <span style={{
                        color: '#C2A14D',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Banquet & Private Events Available
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
} 