import type { Character } from './types';
import Button from './Button';
import { FaTimes } from 'react-icons/fa';

interface DetailsProps {
  character: Character;
  onClose: () => void;
}

const Details = ({ character, onClose }: DetailsProps) => {
  const { header, list, buttonContainer } = styles;
  return (
    <>
      <div style={header}>
        <span>Character details</span>
      </div>

      <ul style={list}>
        <li><strong>Name:</strong> {character.name}</li>
        <li><strong>Status:</strong> {character.status}</li>
        <li><strong>Species:</strong> {character.species}</li>
      </ul>
      <div style={buttonContainer}>
        <Button colorVariant='close' icon={<FaTimes />} label='Close' onClick={onClose} />
      </div>
    </>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '6px 6px 0 0',
    padding: '12px',
  },
  list: {
    listStyle: 'none',
    padding: 15,
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  }
};

export default Details;
