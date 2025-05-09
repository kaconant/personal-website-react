import { FC } from "react";
import { HeaderContainer, HeaderText, SubheaderText } from "./HeaderCardStyle";

type HeaderProps = {
  headerText: string;
  subheaderText?: string;
  isHero?: boolean;
  isCenterAlignment?: boolean;
};

const HeaderCard: FC<HeaderProps> = ({
  headerText,
  subheaderText,
  isHero = true,
  isCenterAlignment = true,
}) => {
  return (
    <HeaderContainer isHero={isHero} isCenterAlignment={isCenterAlignment}>
      <HeaderText isHero={isHero}>{headerText}</HeaderText>
      {subheaderText && <SubheaderText>{subheaderText}</SubheaderText>}
    </HeaderContainer>
  );
};

export default HeaderCard;
