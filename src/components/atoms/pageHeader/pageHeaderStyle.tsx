import styled from "styled-components/macro";
import vaporWaveBackground from "../../../assets/backgrounds/vaporWaveBackground.jpg";
import { H0, H2 } from "../../textElements";

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

export const HeaderText = styled(H0)`
  background: var(--shell);
  padding: 8px;
  border: 3px solid var(--grayscale4);
`;

export const SubheaderText = styled(H2)`
  background: var(--shell);
  padding: 4px 8px;
  border: 3px solid var(--grayscale4);
`;
