import type { ReactNode } from "react";


type ColorVariant = "view" | "edit" | "delete";

interface ActionButtonProps {
  colorVariant: ColorVariant;
  icon: ReactNode;
}

const colorMap = {
  view: "#50C878",
  edit: "#FFD700",
  delete: "#FF4C4C",
};

const Button = ({ colorVariant, icon }: ActionButtonProps) => {
  const styles = {
    backgroundColor: colorMap[colorVariant],
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  };

  return <button style={styles}>{icon}</button>;
};

export default Button;