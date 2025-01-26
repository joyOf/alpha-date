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
  const [pickedLetter, setPickedLetter] = useState('A');

  function handleLetter(letter: string) {
    setPickedLetter(letter);
    const items = data.find((entry) => entry.id === letter);
    const idea = items?.ideas[0];
    setDateIdea(idea || 'Something went wrong');
  }

  function shuffle() {
    const item = data.find((entry) => entry.id === pickedLetter);
    if (!item) return;

    const availableIdeas = item.ideas.filter((idea) => idea !== dateIdea);

    if (availableIdeas.length === 0) {
      setDateIdea('No more unique ideas available');
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableIdeas.length);
    setDateIdea(availableIdeas[randomIndex]);
  }

  function surprise() {
    const allIdeas = data.flatMap((entry) => entry.ideas);
    const randomIndex = Math.floor(Math.random() * allIdeas.length);
    const randomIdea = allIdeas[randomIndex];
    setDateIdea(randomIdea);
  }

  return (
    <div className="flex flex-col h-screen bg-black text-white w-full max-w-screen-lg mx-auto">
      <Display dateIdea={dateIdea} />
      <Keypad handleLetter={handleLetter} handleShuffle={shuffle} handleSurprise={surprise} />
    </div>
  );
}

function Alphabet({ handleLetter, handleShuffle, handleSurprise }: { handleLetter: (letter: string) => void; handleShuffle: () => void; handleSurprise: () => void }) {
  const alphabet = data.map((letter) => (
    <LetterButton key={letter.id} id={letter.id} handleLetter={handleLetter} />
  ));

  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-6 gap-4 p-4 w-full max-w-[800px] mx-auto">
      {alphabet}
      <ShuffleButton handleShuffle={handleShuffle} />
      <SurpriseButton handleSurprise={handleSurprise} />
    </div>
  );
}

function Keypad({ handleLetter, handleShuffle, handleSurprise }: { handleLetter: (letter: string) => void; handleShuffle: () => void; handleSurprise: () => void }) {
  return (
    <div className="flex items-center justify-center w-full p-4">
      <Alphabet handleLetter={handleLetter} handleShuffle={handleShuffle} handleSurprise={handleSurprise} />
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

function LetterButton({ id, handleLetter }: { id: string; handleLetter: (letter: string) => void }) {
  return (
    <button
      className="aspect-square w-full  flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-gray-700"
      onClick={() => handleLetter(id)}
    >
      <p className="font-bold text-xl lg:text-2xl">{id}</p>
    </button>
  );
}

function ShuffleButton({ handleShuffle }: { handleShuffle: () => void }) {
  return (
    <button
      className="aspect-square w-full  flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-gray-700"
      onClick={handleShuffle}
    >
      <p className="font-bold text-xl lg:text-2xl">Shuffle</p>
    </button>
  );
}

function SurpriseButton({ handleSurprise }: { handleSurprise: () => void }) {
  return (
    <button
      className="aspect-square w-full  flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-gray-700"
      onClick={handleSurprise}
    >
      <p className="font-bold text-xl lg:text-2xl">Surprise</p>
    </button>
  );
}