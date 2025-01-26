const data = [
  { id: 'A', dateIdea: '' },
  { id: 'B', dateIdea: '' },
  { id: 'C', dateIdea: '' },
  { id: 'D', dateIdea: '' },
  { id: 'E', dateIdea: '' },
  { id: 'F', dateIdea: '' },
  { id: 'G', dateIdea: '' },
  { id: 'H', dateIdea: '' },
  { id: 'I', dateIdea: '' },
  { id: 'J', dateIdea: '' },
  { id: 'K', dateIdea: '' },
  { id: 'L', dateIdea: '' },
  { id: 'M', dateIdea: '' },
  { id: 'N', dateIdea: '' },
  { id: 'O', dateIdea: '' },
  { id: 'P', dateIdea: '' },
  { id: 'Q', dateIdea: '' },
  { id: 'R', dateIdea: '' },
  { id: 'S', dateIdea: '' },
  { id: 'T', dateIdea: '' },
  { id: 'U', dateIdea: '' },
  { id: 'V', dateIdea: '' },
  { id: 'W', dateIdea: '' },
  { id: 'X', dateIdea: '' },
  { id: 'Y', dateIdea: '' },
  { id: 'Z', dateIdea: '' }
];

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Display />
      <Keypad />
    </div>
  );
}

function Letter({ id }: { id: string }) {
  return (
    <button className="aspect-square w-full flex items-center justify-center bg-gray-900 text-white rounded-full">
      <p className="font-bold">{id}</p>
    </button>
  );
}

function Alphabet() {
  const alphabet = data.map((letter) => (
    <Letter key={letter.id} id={letter.id} />
  ));

  return (
    <div className="grid grid-cols-4 gap-4 p-4 w-full max-w-screen-lg">
      {alphabet}
    </div>
  );
}

function Keypad() {
  return (
    <div className="flex items-center justify-center bg-black w-full">
      <Alphabet />
    </div>
  );
}

function Display() {
  return (
    <div className="flex items-end justify-left h-1/5 text-white p-4">
      <h1 className="text-5xl font-medium">Apple picking in the orchid</h1>
    </div>
  );
}