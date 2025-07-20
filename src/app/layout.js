export const metadata = {
  title: 'German Course India | A1 to C2 | Job Guarantee Program',
  description: 'Join the best German language course in India. A1 to C2 levels, Goethe/TestDaF/DSH prep, live classes, 100% job assistance. Download brochure now!',
  keywords: ['German language course', 'learn German India', 'Goethe preparation', 'A1 to C2 German', 'Job guarantee German course'],
  authors: [{ name: 'germancourseindia.com' }],
  robots: 'index, follow',
  openGraph: {
    title: 'German Course India | A1 to C2 | Job Guarantee Program',
    description: 'Join the best German language course in India with live classes, exam prep & job guarantee. Enroll today!',
    url: 'https://germancourseindia.com',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
