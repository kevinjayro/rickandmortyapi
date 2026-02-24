import { useEffect, useState } from 'react';
import List from './List';
import type { Character } from './types';

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        console.log('API:', data.results);

        setCharacters(data.results);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <List characters={characters} />
    </div>
  );
}

export default App;
