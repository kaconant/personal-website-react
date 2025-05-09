import styled from "styled-components";
import vaporWaveBackground from "@/assets/backgrounds/vaporWaveBackground.jpg";
import { H1, H2 } from "../../Typography";

type HeaderCardProps = {
  isCenterAlignment?: boolean;
  isHero?: boolean;
};

export const HeaderContainer = styled.header<HeaderCardProps>`
  display: flex;
  flex-direction: column;
  text-align: ${({ isCenterAlignment }) =>
    isCenterAlignment ? "center" : "left"};
  align-items: ${({ isCenterAlignment }) =>
    isCenterAlignment ? "center" : "flex-start"};
  background: ${({ isHero }) =>
    isHero ? `url(${vaporWaveBackground})` : "var(--accentPink)"};
  border: ${({ isHero }) =>
    isHero ? `2px solid var(--white)` : `2px solid var(--accentRose)`};
  background-position-y: center;
  justify-content: center;
  border-radius: var(--standardBorderRadius);
  padding: 24px;
  width: 100%;
  height: ${({ isHero }) => (isHero ? "300px" : "100px")};
  gap: 20px;

  @media only screen and (max-width: 768px) {
    display: flex;
    gap: 8px;
    height: ${({ isHero }) => (isHero ? "250px" : "130px")};
    text-align: center;
    align-items: center;
  }
`;

export const HeaderText = styled(H1)<HeaderCardProps>`
  background: var(--accentPink);
  padding: 16px;
  border-radius: var(--standardBorderRadius);
  border: ${({ isHero }) => (isHero ? `2px solid var(--accentRose)` : `none`)};
  font-size: ${({ isHero }) => (isHero ? `44px` : `26px`)};

  @media only screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
    font-family: "Yeseva One", cursive;
    padding: 16px 42px;
  }
`;

export const SubheaderText = styled(H2)`
  background: var(--accentPink);
  padding: 8px 16px;
  border-radius: var(--standardBorderRadius);
  border: 2px solid var(--accentRose);

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 25.2px;
    font-weight: 400;
    padding: 16px 48px;
  }
`;
