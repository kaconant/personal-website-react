import styled from "styled-components/macro";
import vaporWaveBackground from "../../../assets/backgrounds/vaporWaveBackground.jpg";

interface HomeProps {
  extendSidebar?: boolean;
  isMobile?: boolean;
}

export const HomeContainer = styled.div<HomeProps>`
  display: flex;
  justify-content: center;
  margin-top: ${({ isMobile }) =>
    isMobile ? "var(--mobileClosedSidebarWidth)" : "0"};
`;

export const HeaderContainer = styled.div`
  background-image: url(${vaporWaveBackground});
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border: 3px solid var(--outline);
  width: 100%;
  max-width: 1000px;
  height: auto;
  max-height: 500px;
  padding: 24px;
`;
