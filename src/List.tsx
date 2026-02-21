import type { Character } from "./types";
import Button from "./Button";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
interface ListProps {
  characters: Character[];
}

const List = ({ characters }: ListProps) => {
  const { container, header, row, actions } = styles;

  return (
    <div style={container}>
      <div style={header}>
        <span>Name</span>
        <span>Status</span>
        <span>Species</span>
        <span>Actions</span>
      </div>

      {characters.map((character) => (
        <div key={character.id} style={row}>
          <span>{character.name}</span>
          <span>{character.status}</span>
          <span>{character.species}</span>
          <div style={actions}>
            <Button colorVariant="view" icon={<FaEye />} />
            <Button colorVariant="edit" icon={<FaPen />} />
            <Button colorVariant="delete" icon={<FaTrash />} />
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '70%'
  },

  header: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    fontWeight: 'bold',
    padding: '12px',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '6px 6px 0 0',
  },

  row: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    padding: '12px',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#f9fafb',
  },

  actions: {
    display: "flex",
    gap: "8px",
  },
};


export default List;
