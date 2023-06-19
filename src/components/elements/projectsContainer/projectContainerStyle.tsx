import styled from "styled-components/macro";

type ProjectContainerProps = {
  isMobile: boolean;
};

export const ProjectContainerCard = styled.div<ProjectContainerProps>`
  display: grid;
  grid-template-columns: ${({ isMobile }) => (isMobile ? "1fr" : "1fr 1fr")};
  gap: 40px;
`;

export const ProjectCard = styled.div<ProjectContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 40px;
  border: 1px solid var(--grayscale4);
  background: var(--white);
  padding: 40px;
`;

export const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProjectImage = styled.img`
  height: auto;
  width: 100%;
  background: var(--shell);
  border: 1px solid var(--white);
  border-radius: 8px;
`;
