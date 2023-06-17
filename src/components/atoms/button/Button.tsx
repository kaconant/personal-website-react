import { FC, MouseEventHandler } from "react";
import { ButtonElement } from "./buttonStyle";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<ButtonProps> = ({ onClick }) => {
  return <ButtonElement onClick={onClick}></ButtonElement>;
};

export default Button;
