import Hero from '../Hero/Hero';
import Specials from '../Specials/Specials';
import Testimonials from '../Testimonials/Testimonials';
import Banner from '../Banner/Banner';

import './Main.css';

function Main() {
  return (
    <main className="main__container">
      <Hero />
      <Specials />
      <Testimonials />
      <Banner />
    </main>
  );
}

export default Main;
