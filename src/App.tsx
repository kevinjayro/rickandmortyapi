import { useEffect, useState } from 'react';
import List from './List';
import Details from './Details';
import type { Character } from './types';

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

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
    <div style={{ width: '100%' }}>
      <h1>Rick and Morty Characters</h1>

      <div style={{ display: 'flex' }}>

        <div style={{ width: '70%' }}>
          <List
            characters={characters}
            onView={setSelectedCharacter}
          />
        </div>

        <div style={{ width: '30%' }}>
          {selectedCharacter && (
            <Details
              character={selectedCharacter}
              onClose={() => setSelectedCharacter(null)}
            />
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
