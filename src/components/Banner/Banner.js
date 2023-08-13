import { Link } from 'react-router-dom';
import Button from '../Button/Button';

import './Banner.css';

function Banner() {
  return (
    <section className="banner__wrapper-background">
      <section className="banner__wrapper container">
        <article className="banner__text-content">
          <h1 className="banner__heading">Little Lemon</h1>
          <span className="banner__sub-heading">Chicago</span>
          <p className="banner__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard great. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard great.
          </p>
          <p className="banner__description banner__description-last">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard great Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard great.
          </p>
          <Link to="/reserve-table">
            <Button>Reserve a Table</Button>
          </Link>
        </article>
        <section className="banner__pictures">
          <img src="assets/banner-under.svg" className="banner__image-down" alt="restaurant interior" />
          <img src="assets/banner-up.svg" className="banner__image-up" alt="restaurant interior and table with variation of dishes" />
        </section>
      </section>
    </section>
  );
}

export default Banner;
