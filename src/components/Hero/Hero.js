import Button from '../Button/Button';
import './Hero.css';

function Hero() {
  return (
    <section className="hero__wrapper-background">
      <section className="hero__wrapper container">
        <article className="hero__text-content">
          <h1 className="hero__heading">Little Lemon</h1>
          <span className="hero__sub-heading">Chicago</span>
          <p className="hero__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
          <Button>Reserve a Table</Button>
        </article>
        <img src="assets/hero-image.svg" className="hero__image" alt="Bruschetas" />
      </section>
    </section>
  );
}

export default Hero;
