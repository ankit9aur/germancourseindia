// src/app/page.js
import StickyNavbar from '../components/StickyNavbar';
import HeroWithLeadForm from '../components/HeroWithLeadForm';
import OfferingsGrid from '../components/OfferingsGrid';
import StickyFooter from '../components/StickyFooter';

export default function Home() {
  return (
    <>
      <StickyNavbar />
      <main>
        <HeroWithLeadForm />
        <OfferingsGrid />
      </main>
      <StickyFooter />
    </>
  );
}
