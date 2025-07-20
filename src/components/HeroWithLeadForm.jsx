// src/app/components/HeroWithLeadForm.jsx
export default function HeroWithLeadForm() {
  return (
    <section style={{
      display: 'flex',
      gap: '3rem',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'linear-gradient(90deg,#a83243,#711d2d)',
      color: 'white',
      padding: '2rem 2.5rem 2rem 2.5rem',
      borderRadius: '0 0 2rem 2rem',
      position: 'relative',
      minHeight: '340px',
    }}>
      {/* Left side: Hero content */}
      <div style={{ flex: 2 }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>
          German Language Course - Job Guarantee Program
        </h1>
        <ul style={{ margin: '1.3rem 0', paddingLeft: '1.5rem', fontSize: '1.15rem' }}>
          <li>66 Hrs (45 Hrs Training+11 Hrs GD+10 Hrs Exam Prep) for Each Level.</li>
          <li>Master A1, A2, B1, B2, C1, C2 Levels of the German Language.</li>
          <li>Ace the Goethe Institute, TestDaF, and DSH Exam Preparations</li>
        </ul>
        <div style={{ marginTop: '1rem', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: '#ffd700', fontWeight: 'bold', fontSize: '1.8rem' }}>★ 4.9</span>
          <span style={{ color: '#ffd700' }}>(2354 Ratings)</span>
          <span style={{ color: '#fff', paddingLeft: '1.5rem', fontWeight: 'bold' }}>2518 Learners</span>
        </div>
      </div>
      {/* Right side: Lead form */}
      <div style={{
        background: 'white',
        color: 'black',
        borderRadius: '1rem',
        padding: '2rem 1.5rem 1.5rem 1.5rem',
        boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
        flex: 1,
        maxWidth: 360,
        minWidth: 290,
        display: 'flex',
        flexDirection: 'column',
      }}>
        <h3 style={{ fontWeight: 'bold', fontSize: '1.22rem', marginBottom: '1.2rem', textAlign: 'center' }}>
          Download Course Brochure
        </h3>
        <form>
          <input
            placeholder="Email"
            style={{
              padding: '0.7rem',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              marginBottom: '0.7rem',
              width: '100%',
              fontSize: '1rem',
            }}
            type="email"
            required
          />
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.7rem' }}>
            <select
              style={{
                padding: '0.7rem',
                borderRadius: '0.5rem',
                border: '1px solid #ccc',
                fontSize: '1rem',
                width: '40%',
              }}
              defaultValue="India (+91)"
            >
              <option>India (+91)</option>
              {/* Add more if needed */}
            </select>
            <input
              placeholder="Mobile no *"
              style={{
                padding: '0.7rem',
                borderRadius: '0.5rem',
                border: '1px solid #ccc',
                width: '60%',
                fontSize: '1rem',
              }}
              type="text"
              required
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.9rem',
              background: 'linear-gradient(90deg,#818cf8,#a7d8ff)',
              color: '#30313c',
              border: 'none',
              fontWeight: 'bold',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '1.08rem',
              marginTop: '0.7rem',
            }}
          >
            Send Me Brochure &raquo;
          </button>
        </form>
      </div>
      {/* Side floating button/phone - not part of this section */}
    </section>
  );
}
