import styled from "styled-components/macro";
import vaporWaveBackground from "../../../assets/backgrounds/vaporWaveBackground.jpg";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-image: url(${vaporWaveBackground});
  border: 3px solid var(--midAqua););
  padding: 24px;
  width: 100%;
  gap: 20px;
`;
