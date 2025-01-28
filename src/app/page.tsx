'use client';

import { Shuffle, Wand } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    async function populateData() {
      const response = await fetch('/api/populate');
      const result = await response.json();
      console.log('Database populated:', result);
    }

    populateData();
  }, []);

  const [dateIdea, setDateIdea] = useState('Pick a letter.');
  const [pickedLetter, setPickedLetter] = useState('A');
  const [viewedIdeas, setViewedIdeas] = useState<string[]>([]);

  async function handleLetter(letter: string) {
    async function find(letterId: string): Promise<any> {
      const response = await fetch(`/api/get?letter=${letterId}`);
      const result = await response.json();
      return result;
    }

    const ideaDate = await find(letter);
    setPickedLetter(letter);
    setDateIdea(ideaDate.ideas[0]);

  }

  function shuffle() {
    async function fetchIdeasForLetter(letter: string): Promise<any[]> {
      const response = await fetch(`/api/get?letter=${letter}`);
      const result = await response.json();
      return result?.ideas || [];
    }

    fetchIdeasForLetter(pickedLetter).then((ideas) => {
      const availableIdeas = ideas.filter((idea: string) => !viewedIdeas.includes(idea));

      if (availableIdeas.length === 0) {
        setDateIdea('No more unique ideas available for this letter.');
        setViewedIdeas([]);
      } else {
        const randomIndex = Math.floor(Math.random() * availableIdeas.length);
        const newIdea = availableIdeas[randomIndex];
        setDateIdea(newIdea);
        setViewedIdeas((prev) => [...prev, newIdea]);
      }
    });
  }

  async function surprise() {
    try {
      const response = await fetch('/api/random');
      const result = await response.json();
      setDateIdea(result.idea || 'Something went wrong');
    } catch (error) {
      console.error('Error fetching random idea:', error);
      setDateIdea('Something went wrong');
    }
  }

  return (
    <div className="flex flex-col h-screen bg-black text-white w-full">
      <Display dateIdea={dateIdea} />
      <Keypad handleLetter={handleLetter} handleShuffle={shuffle} handleSurprise={surprise} />
    </div>
  );
}

function Alphabet({ handleLetter, handleShuffle, handleSurprise }: { handleLetter: (letter: string) => void; handleShuffle: () => void; handleSurprise: () => void }) {
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map((letter) => (
    <LetterButton key={letter} id={letter} handleLetter={handleLetter} />
  ));

  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-6 gap-2 p-2 w-full max-w-[800px] mx-auto">
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
    <div className="flex items-center justify-start h-1/5 p-4 w-full max-w-[800px] mx-auto">
      <h1 className="text-5xl font-medium">{dateIdea}</h1>
    </div>
  );
}

function LetterButton({ id, handleLetter }: { id: string; handleLetter: (letter: string) => void }) {
  return (
    <button
      className="aspect-square w-full flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-gray-700"
      onClick={() => handleLetter(id)}
    >
      <p className="font-bold text-xl lg:text-2xl">{id}</p>
    </button>
  );
}

function ShuffleButton({ handleShuffle }: { handleShuffle: () => void }) {
  return (
    <button
      className="aspect-square w-full flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-gray-700"
      onClick={handleShuffle}
    >
      <Shuffle />
    </button>
  );
}

function SurpriseButton({ handleSurprise }: { handleSurprise: () => void }) {
  return (
    <button
      className="aspect-square w-full flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-gray-700"
      onClick={handleSurprise}
    >
      <Wand />
    </button>
  );
}
