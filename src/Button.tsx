import type { ReactNode } from 'react';

type ColorVariant = 'view' | 'edit' | 'delete';

interface ActionButtonProps {
  colorVariant: ColorVariant;
  icon?: ReactNode;
  label?: string;
}

const colorMap = {
  view: '#50C878',
  edit: '#FFD700',
  delete: '#FF4C4C',
};

const Button = ({ colorVariant, icon, label }: ActionButtonProps) => {
  const styles = {
    backgroundColor: colorMap[colorVariant],
    border: 'none',
    padding: '8px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
  };

  return <button style={styles}>{label}{icon}</button>;
};

export default Button;