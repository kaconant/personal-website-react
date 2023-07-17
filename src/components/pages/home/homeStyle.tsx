import styled from "styled-components/macro";

interface HomeProps {
  isMobile?: boolean;
}

export const HomeContainer = styled.div<HomeProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  width: 100%;
  padding: ${({ isMobile }) => (isMobile ? "0 12px" : "0")};
  max-width: 1200px;
  height: auto;
`;
