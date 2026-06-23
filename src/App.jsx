import Header from './components/Header';
import Hero from './components/Hero';
import Counters from './components/Counters';
import Problems from './components/Problems';
import Advantages from './components/Advantages';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import CtaForm from './components/CtaForm';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Counters />
        <Problems />
        <Advantages />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Reviews />
        <Faq />
        <CtaForm />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
