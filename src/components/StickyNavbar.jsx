// src/app/components/StickyNavbar.jsx
import Image from 'next/image';

export default function StickyNavbar() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'white',
      boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.5rem 2rem',
    }}>
      <div>
        <Image src="/logo.png" alt="Eduwatts Logo" height={40} width={140} />
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button style={{
          padding: '0.65rem 1.5rem',
          borderRadius: '0.5rem',
          border: 'none',
          background: 'linear-gradient(90deg,#8b5cf6,#06b6d4)',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}>
          Book Free Demo
        </button>
        <button style={{
          padding: '0.65rem 1.5rem',
          borderRadius: '0.5rem',
          border: 'none',
          background: 'linear-gradient(90deg,#dbeafe,#f0abfc)',
          color: '#22223b',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}>
          Get Quick Call Back
        </button>
      </div>
    </nav>
  );
}
