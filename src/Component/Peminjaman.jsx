import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Peminjaman = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/products')
      .then(res => {
        setCards(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen p-6 font-['Inter']">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {cards.map(card => (
          <div
            key={card.id}
            id='Peminjaman'
            className="relative w-full h-130 rounded-4xl overflow-hidden shadow-2xl bg-black group"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black via-black/95 via-25% to-transparent" />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 pb-10">
              <h2 className="text-2xl text-white font-medium mb-3 tracking-tight">
                {card.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {card.description}
              </p>
              <a
                href="/pinjam"
                className="inline-flex items-center text-white text-sm font-medium hover:text-gray-200 transition-colors group/btn"
              >
                Pinjam
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Peminjaman;