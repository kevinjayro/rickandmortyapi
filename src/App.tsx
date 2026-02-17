import { useEffect, useState } from "react";
interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
}

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

        console.log("API:", data.results);

        setCharacters(data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>

      <ul>
      {characters.map((character) => (
        <li key={character.id}>
          <div>
            <strong>Name:</strong> {character.name}
          </div>
          <div>
            <strong>Status:</strong> {character.status}
          </div>
          <div>
            <strong>Species:</strong> {character.species}
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default App;
