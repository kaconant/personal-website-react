import styled from "styled-components/macro";

type ButtonProps = {
  theme: string;
};

export type theme = "primary" | "button";

type ThemeAttribute = Record<theme, string>;

const backgroundColors: ThemeAttribute = {
  primary: "transparent",
  button: "var(--lightBlue)",
};

const textColors: ThemeAttribute = {
  primary: "var(--darkPurple)",
  button: "var(--black)",
};

const hoverTextColors: ThemeAttribute = {
  primary: "var(--black)",
  button: "unset",
};

const fontSize: ThemeAttribute = {
  primary: "20px",
  button: "24px",
};

const lineHeight: ThemeAttribute = {
  primary: "30px",
  button: "36px",
};

const fontWeight: ThemeAttribute = {
  primary: "600",
  button: "500",
};

const fontStyle: ThemeAttribute = {
  primary: "italic",
  button: "normal",
};

const padding: ThemeAttribute = {
  primary: "0",
  button: "12px",
};

const border: ThemeAttribute = {
  primary: "unset",
  button: "3px solid var(--grayscale4)",
};

const hoverBorderColors: ThemeAttribute = {
  primary: "unset",
  button: "var(--grayscale6)",
};

const fontFamily: ThemeAttribute = {
  primary: "Montserrat, sans-serif",
  button: "Yeseva One, cursive",
};

const opacity: ThemeAttribute = {
  primary: "100%",
  button: "80%",
};

const justifyItems: ThemeAttribute = {
  primary: "flex-start",
  button: "center",
};

export const LinkElement = styled.a<ButtonProps>`
  display: flex;
  background-color: ${({ theme }) =>
    backgroundColors[theme as keyof typeof backgroundColors]};
  color: ${({ theme }) => textColors[theme as keyof typeof textColors]};
  font-style: ${({ theme }) => fontStyle[theme as keyof typeof fontStyle]};
  font-family: ${({ theme }) => fontFamily[theme as keyof typeof fontFamily]};
  font-size: ${({ theme }) => fontSize[theme as keyof typeof fontSize]};
  line-height: ${({ theme }) => lineHeight[theme as keyof typeof lineHeight]};
  font-weight: ${({ theme }) => fontWeight[theme as keyof typeof fontWeight]};
  padding: ${({ theme }) => padding[theme as keyof typeof padding]};
  border: ${({ theme }) => border[theme as keyof typeof border]};
  border-radius: var(--standardBorderRadius);
  opacity: ${({ theme }) => opacity[theme as keyof typeof opacity]};
  justify-content: ${({ theme }) =>
    justifyItems[theme as keyof typeof justifyItems]};
  width: fit-content;
  text-align: center;

  &:hover {
    color: ${({ theme }) =>
      hoverTextColors[theme as keyof typeof hoverTextColors]};
    border-color: ${({ theme }) =>
      hoverBorderColors[theme as keyof typeof hoverTextColors]};
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 40px;
    font-weight: 500;
  }
`;
