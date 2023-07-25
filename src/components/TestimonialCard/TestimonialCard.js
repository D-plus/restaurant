import './TestimonialCard.css';

function TestimonialCard({ name, feedback, imageSrc }) {
  return (
    <article className="testimonial-card__wrapper">
      <header>
        <section className="testimonial-card__rating-section">
          <span className="testimonial-card__rating-title">Rating</span>
          <section className="testimonial-card__rating">
            <img src="assets/icons/star.svg" alt='Rating Start' />
            <img src="assets/icons/star.svg" alt='Rating Start' />
            <img src="assets/icons/star.svg" alt='Rating Start' />
            <img src="assets/icons/star.svg" alt='Rating Start' />
            <img src="assets/icons/star.svg" alt='Rating Start' />
          </section>
        </section>
        <section className="testimonial-card__user-content-section">
          <img src={imageSrc} className="testimonial-card__image" alt='Avatar of the client' />
          <span className="testimonial-card__name">{name}</span>
        </section>
      </header>
      <main>
        <p className="testimonial-card__feedback">{feedback}</p>
      </main>
    </article>
  );
}

export default TestimonialCard;
