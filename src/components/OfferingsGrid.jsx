// src/app/components/OfferingsGrid.jsx

const offerings = [
  {
    title: 'Native Experienced Trainers',
    desc: 'Learn from the Certified Native German Trainers',
    color: '#fff0f0',
  },
  {
    title: 'Customized German Language',
    desc: 'One of a Kind Customized German Language Course',
    color: '#edeef7',
  },
  {
    title: 'Comprehensive Curriculum',
    desc: 'Curriculum designed as per the DSH, TestDaF, and the Goethe-Institut Examination',
    color: '#dcf9fb',
  },
  {
    title: '10 in 1 program',
    desc: 'Access to T.P.I.C.P.E.B.H.M Features of the German Language Course',
    color: '#fcf3ca',
  },
  {
    title: 'Gold Membership',
    desc: 'Get a 1-Year Gold Membership of Language Academy',
    color: '#eaddfa',
  },
  {
    title: 'Live Projects',
    desc: 'Live Projects + Guaranteed Internship + Weekly Job Support + Recorded Videos + Monthly Bootcamp Sessions',
    color: '#ffe8ef',
  },
];

export default function OfferingsGrid() {
  return (
    <section style={{
      background: 'white',
      borderRadius: '2rem',
      margin: '2.5rem auto 1rem auto',
      maxWidth: 1200,
      boxShadow: '0 2px 18px rgba(0,0,0,0.06)',
      padding: '2rem 1rem 2.5rem 1rem',
    }}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        textAlign: 'center',
      }}>
        Eduwatts Exclusive Course Offerings
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(275px, 1fr))',
        gap: '1.5rem',
      }}>
        {offerings.map((of, idx) => (
          <div key={idx} style={{
            background: of.color,
            borderRadius: '1.2rem',
            padding: '1.3rem 1.2rem',
            minHeight: 135,
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
          }}>
            <strong style={{ fontSize: '1.15rem' }}>{of.title}</strong>
            <span style={{ color: '#3c3d4e', marginTop: '0.7rem', fontSize: '1.07rem' }}>{of.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
