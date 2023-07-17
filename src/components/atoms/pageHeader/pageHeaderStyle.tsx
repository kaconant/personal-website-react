import styled from "styled-components/macro";
import vaporWaveBackground from "../../../assets/backgrounds/vaporWaveBackground.jpg";
import { H1, H2 } from "../../textElements";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-image: url(${vaporWaveBackground});
  border: 3px solid var(--grayscale4);
  border-radius: 8px;
  padding: 24px;
  width: 100%;
  gap: 20px;
`;

export const HeaderText = styled(H1)`
  background: var(--shell);
  padding: 8px;
  border: 3px solid var(--grayscale4);

  @media only screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
    font-family: "Yeseva One", cursive;
    opacity: 80%;
  }
`;

export const SubheaderText = styled(H2)`
  background: var(--shell);
  padding: 4px 8px;
  border: 3px solid var(--grayscale4);

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 25.2px;
    font-weight: 400;
  }
`;
