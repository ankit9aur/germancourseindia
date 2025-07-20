// src/app/components/StickyFooter.jsx
export default function StickyFooter() {
  return (
    <footer style={{
      position: 'sticky',
      bottom: 0,
      width: '100%',
      background: 'linear-gradient(90deg,#40b653,#fad02e)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: '#fff',
      padding: '0.9rem 2rem',
      zIndex: 100,
      fontWeight: 'bold',
      fontSize: '1.18rem',
    }}>
      <span>
        <span style={{ fontWeight: 'bold', letterSpacing: 0.5 }}>📞 +91 9205444827</span>
      </span>
      <span style={{
        background: '#22223b',
        color: '#fad02e',
        padding: '0.48rem 1.1rem',
        borderRadius: '1rem',
        fontWeight: 700,
      }}>
        ★ Free 1st Class
      </span>
    </footer>
  );
}
