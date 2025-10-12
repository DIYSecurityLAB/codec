import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Objectives from '@/components/Objectives';
import Organizers from '@/components/Organizers';
import SocialResponsibility from '@/components/SocialResponsibility';
import Location from '@/components/Location';
import Registration from '@/components/Registration';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Objectives />
      <SocialResponsibility />
      <Organizers />
      <Location />
      <Registration />
      <Footer />
    </div>
  );
}
