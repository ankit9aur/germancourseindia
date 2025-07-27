import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Offerings from '../components/Offerings';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import LocationMap from '../components/LocationMap';

export default function Home() {
  return (
    <>
      <Head>
        <title>German Language Course India | Job Guarantee Program</title>
        <meta
          name="description"
          content="Master German from A1 to C2 with expert-led training. Job guarantee program with 4.9★ rating and 2500+ successful learners."
        />
        <meta
          name="keywords"
          content="German course India, learn German online, job guarantee language course, A1 to C2 German, German coaching Delhi, German A1 A2 B1 B2 C1 C2, Goethe TestDaF DSH exam prep"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="German Course India" />
        <link rel="canonical" href="https://www.germancourseindia.com" />
      </Head>

      <main className="font-sans text-gray-900 bg-white">
        <Header />
        <HeroSection />
        <Offerings />
        <FAQ />
        <Testimonials />
        <LocationMap />
        <Footer />
      </main>
    </>
  );
}
