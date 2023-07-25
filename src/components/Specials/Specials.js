import Button from '../Button/Button';
import './Specials.css';
import Card from '../Card/Card';

const SPECIALS_LIST_DATA = [
  {
    title: 'Greek Salad',
    price: '12.99',
    imageSrc: 'assets/greek-salad.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard text.',
  },
  {
    title: 'Bruschetta',
    price: '9.99',
    imageSrc: 'assets/bruschetta.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    title: 'Lemon Desert',
    price: '4.99',
    imageSrc: 'assets/lemon-desert.svg',
    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.',
  },
];

function Specials() {
  return (
      <section className="specials__wrapper">
        <header className="specials__header">
          <h2>This weeks specials!</h2>
          <Button>Online Menu</Button>
        </header>
        <main className="specials__cards-list">
          {SPECIALS_LIST_DATA.map(({ title, description, imageSrc, price }) => (
            <Card
              title={title}
              description={description}
              imageSrc={imageSrc}
              price={price}
            />
          ))}
        </main>
      </section>
  );
}

export default Specials;
