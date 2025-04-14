import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Details.css';

function Details() {
  const { id } = useParams();

  const images = {
    1: '/images/part1.jpg',
    2: '/images/svoboda.jpg',
    3: '/images/svoboda.jpg',
  };

  const titles = {
    1: 'S T R A X A N E T',
    2: 'Свободное место',
    3: 'Свободное место',
  };

  const descriptions = {
    1: '',
    2: 'Уважаемые будущие партнеры, мы рады предложить вам возможность занять уникальное место в нашем проекте! Развивайтесь вместе с нами и делайте свои бренды заметными..',
    3: 'Уважаемые будущие партнеры, мы рады предложить вам возможность занять уникальное место в нашем проекте! Развивайтесь вместе с нами и делайте свои бренды заметными.',
  };

  const telegramLinks = {
    1: ' https://t.me/CTRAXANETlios',
    2: 'https://t.me/Dragon010101',
    3: 'https://t.me/Dragon010101',
  };

  return (
    <div>
      <div className="card">
        <img src={images[id]} alt={titles[id]} />
        <h2>{titles[id]}</h2>
        <p>{descriptions[id]}</p>
        <a href={telegramLinks[id]} target="_blank" rel="noopener noreferrer">В Telegram</a>
        <Link to="/" className="back-button">Главное меню</Link>
      </div>
    </div>
  );
}

export default Details;

