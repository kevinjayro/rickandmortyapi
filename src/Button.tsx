import type { ReactNode } from 'react';
type ColorVariant = 'view' | 'edit' | 'delete' | 'close';

interface ActionButtonProps {
  colorVariant: ColorVariant;
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
}

const colorMap = {
  view: '#50C878',
  edit: '#FFD700',
  delete: '#FF4C4C',
  close: '#000000'
};

const Button = ({ colorVariant, icon, label, onClick }: ActionButtonProps) => {
  const styles = {
    backgroundColor: colorMap[colorVariant],
    border: 'none',
    padding: '8px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    color: colorVariant === 'close' ? '#FFFFFF' : 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  };

  return <button style={styles} onClick={onClick}> {label} {icon} </button>;
};

export default Button;
