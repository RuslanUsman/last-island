import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const cards = [
    { id: 1, title: 'S T R A X A N E T', image: '/images/strax1.jpg' },
    { id: 2, title: 'Свободное место', image: '/images/svoboda.jpg' },
    { id: 3, title: 'Свободное место', image: '/images/svoboda.jpg' },
  ];

  return (
    <div>
      <header>
        <img src="/images/main-banner.jpg" alt="Главное меню" />
      </header>
      <section className="container">
        {cards.map(card => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} />
            <h2>{card.title}</h2>
            <Link to={`/details/${card.id}`}>Перейти</Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;

