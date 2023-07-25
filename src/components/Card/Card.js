import './Card.css';

function Card({ title, price, description, imageSrc }) {
  return (
    <article className="card__wrapper">
      <img src={imageSrc} className="card__image" alt="Specials dish"/>
      <section className="card__details-wrapper">
        <header className="card__header">
          <h6>{title}</h6>
          <span>$ {price}</span>
        </header>
        <main className="card__main">
          <p>{description}</p>
        </main>
        <footer className="card__footer">
          <span>Order a delivery</span>
          <img src="assets/icons/scooter.svg" alt="illustration of the delivery vehicle" />
        </footer>
      </section>
    </article>
  );
}

export default Card;
