import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

import './Testimonials.css';

const FEEDBACK = [
  {
    name: 'Brian',
    feedback: 'Lorem Ipsum is simply dummy text of the printing and  industry. Lorem Ipsum has been the industry\'s standard great',
    imageSrc: 'assets/testimonials/brian.svg',
  },
  {
    name: 'Ann',
    feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard great',
    imageSrc: 'assets/testimonials/ann.svg',
  },
  {
    name: 'Richard',
    feedback: 'Lorem Ipsum is simply dummy text printing and typesetting industry. Lorem Ipsum has been the industry\'s standard very great',
    imageSrc: 'assets/testimonials/richard.svg',
  },
  {
    name: 'Luy',
    feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
    imageSrc: 'assets/testimonials/luy.svg',
  },
];

function Testimonials() {
  return (
    <section className="testimonials__wrapper-background">
      <section className="testimonials__wrapper container">
        <article className="testimonials__content">
          <h2 className="testimonials__heading">Testimonials</h2>
          <section className="testimonials__feedback-list">
            {FEEDBACK.map(({ name, feedback, imageSrc}) => (
              <TestimonialCard key={`${name} ${feedback}`} name={name} feedback={feedback} imageSrc={imageSrc} />
            ))}
          </section>
          <Link to="/reserve-table">
            <Button>Reserve a Table</Button>
          </Link>
        </article>
      </section>
    </section>
  );
}

export default Testimonials;
