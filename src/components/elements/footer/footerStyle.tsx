import styled from "styled-components/macro";

type FooterContainerProps = {
  isMobile: boolean;
};

export const FooterContainer = styled.div<FooterContainerProps>`
  display: flex;
  position: sticky;
  gap: 24px;
  justify-content: flex-end;
  width: 100%;
  bottom: 0px;
  padding: 16px 24px;
  margin: 0;
  background-color: var(--lightOrange);
  border: 1px solid var(--midOrange);
`;
