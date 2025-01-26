'use client';

import { useState } from 'react';

const data = [
  { id: 'A', ideas: ['Art gallery visit', 'Archery session', 'Amusement park day'] },
  { id: 'B', ideas: ['Bike ride', 'Beach day', 'Board game night'] },
  { id: 'C', ideas: ['Cooking class', 'Camping trip', 'Craft workshop'] },
  { id: 'D', ideas: ['Dance lesson', 'Darts game', 'Dinner date'] },
  { id: 'E', ideas: ['Escape room', 'Exploring a local market', 'Evening stroll'] },
  { id: 'F', ideas: ['Fishing trip', 'Farm visit', 'Food truck hopping'] },
  { id: 'G', ideas: ['Gardening together', 'Golf session', 'Go-kart racing'] },
  { id: 'H', ideas: ['Hiking adventure', 'Hot air balloon ride', 'Home movie night'] },
  { id: 'I', ideas: ['Ice skating', 'Indoor rock climbing', 'Imax movie experience'] },
  { id: 'J', ideas: ['Jazz concert', 'Jigsaw puzzle night', 'Juice bar crawl'] },
  { id: 'K', ideas: ['Karaoke night', 'Kayaking', 'Kite flying'] },
  { id: 'L', ideas: ['Library visit', 'Live music event', 'Lunch at a cozy cafe'] },
  { id: 'M', ideas: ['Museum tour', 'Mountain biking', 'Meditation class'] },
  { id: 'N', ideas: ['Nature walk', 'Night photography', 'Netflix binge-watch'] },
  { id: 'O', ideas: ['Outdoor picnic', 'Observatory visit', 'Open mic night'] },
  { id: 'P', ideas: ['Pottery class', 'Painting workshop', 'Parkour session'] },
  { id: 'Q', ideas: ['Quiz night', 'Quilting class', 'Quiet coffee date'] },
  { id: 'R', ideas: ['Rock climbing', 'Road trip', 'Roller skating'] },
  { id: 'S', ideas: ['Stargazing', 'Scavenger hunt', 'Stand-up comedy show'] },
  { id: 'T', ideas: ['Theater performance', 'Tennis match', 'Trampoline park'] },
  { id: 'U', ideas: ['Urban exploration', 'Ultimate frisbee', 'Underground tour'] },
  { id: 'V', ideas: ['Visit a vineyard', 'Volunteer together', 'Virtual reality gaming'] },
  { id: 'W', ideas: ['Wine tasting', 'Water park adventure', 'Walk through botanical gardens'] },
  { id: 'X', ideas: ['Xylophone lesson', 'Xtreme sports', 'Xbox gaming session'] },
  { id: 'Y', ideas: ['Yoga class', 'Yacht ride', 'Yard sale exploration'] },
  { id: 'Z', ideas: ['Zoo visit', 'Zip-lining', 'Zumba class'] },
];

export default function Home() {
  const [dateIdea, setDateIdea] = useState('Pick a letter.');

  function handleLetter(letter: string) {
    const chosenDateIdea = data.find((l) => l.id === letter)?.idea;
    const showDateIdea = chosenDateIdea || 'Something went wrong';
    setDateIdea(showDateIdea);
  }

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <Display dateIdea={dateIdea} />
      <Keypad handleLetter={handleLetter} />
    </div>
  );
}

function LetterButton({ id, handleLetter }: { id: string; handleLetter: (letter: string) => void }) {
  return (
    <button
      className="aspect-square w-full flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-gray-700"
      onClick={() => handleLetter(id)}
    >
      <p className="font-bold">{id}</p>
    </button>
  );
}

function Alphabet({ handleLetter }: { handleLetter: (letter: string) => void }) {
  const alphabet = data.map((letter) => (
    <LetterButton key={letter.id} id={letter.id} handleLetter={handleLetter} />
  ));

  return (
    <div className="grid grid-cols-4 gap-4 p-4 w-full max-w-screen-lg">
      {alphabet}
    </div>
  );
}

function Keypad({ handleLetter }: { handleLetter: (letter: string) => void }) {
  return (
    <div className="flex items-center justify-center w-full p-4">
      <Alphabet handleLetter={handleLetter} />
    </div>
  );
}

function Display({ dateIdea }: { dateIdea: string }) {
  return (
    <div className="flex items-center justify-start h-1/5 p-4 text-left">
      <h1 className="text-5xl font-medium">{dateIdea}</h1>
    </div>
  );
}

function ShuffleButton({ id, handleLetter }: { id: string; handleLetter: (letter: string) => void }) {
  return (
    <button
      className="aspect-square w-full flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-gray-700"
      onClick={() => handleLetter(id)}
    >
      <p className="font-bold">{id}</p>
    </button>
  );
}