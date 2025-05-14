import styled from "styled-components";
import vaporWaveBackground from "@/assets/backgrounds/vaporWaveBackground.jpg";
import { H1, P1Bold } from "../../Typography";

type HeaderCardProps = {
  isCenterAlignment?: boolean;
  isHero?: boolean;
};

export const HeaderContainer = styled.header<HeaderCardProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: ${({ isCenterAlignment }) =>
    isCenterAlignment ? "center" : "left"};
  align-items: ${({ isCenterAlignment }) =>
    isCenterAlignment ? "center" : "flex-start"};
  background: ${({ isHero }) =>
    isHero ? `url(${vaporWaveBackground})` : `transparent`};
  background-position-y: center;
  justify-content: center;
  border-radius: var(--standardBorderRadius);
  padding: 24px;
  width: 100%;
  height: ${({ isHero }) => (isHero ? "300px" : "100px")};
  gap: 20px;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    gap: 8px;
    height: ${({ isHero }) => (isHero ? "250px" : "130px")};
    text-align: center;
    align-items: center;
  }
`;

export const HeaderText = styled(H1)<HeaderCardProps>`
  position: relative;
  background: var(--secondaryColor);
  padding: 16px;
  border-radius: var(--standardBorderRadius);
  font-size: ${({ isHero }) => (isHero ? `44px` : `26px`)};
  z-index: 1;
  opacity: 0.9;

  ${({ isHero }) =>
    isHero &&
    `
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      padding: 2px;
      border-radius: var(--standardBorderRadius);
      background: repeating-linear-gradient(
        to right,
        #ffb3f3,
        #ffc6ec,
        #c9b6ff,
        #b3e5ff,
        #d1ffd6,
        #fff7b3,
        #ffb3f3
      );
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      z-index: -1;
    }
  `}

  @media only screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
    font-family: "Yeseva One", cursive;
    padding: 16px 42px;
  }
`;

export const SubheaderText = styled(P1Bold)`
  position: relative;
  background: var(--secondaryColor);
  padding: 8px 16px;
  border-radius: var(--standardBorderRadius);
  z-index: 1;
  opacity: 0.9;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 2px;
    border-radius: var(--standardBorderRadius);
    background: repeating-linear-gradient(
      to right,
      #ffb3f3,
      #ffc6ec,
      #c9b6ff,
      #b3e5ff,
      #d1ffd6,
      #fff7b3,
      #ffb3f3
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 25.2px;
    font-weight: 400;
    padding: 16px 48px;
  }
`;
