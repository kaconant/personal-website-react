import styled from "styled-components/macro";

type ContactPageProps = {
  isMobile?: boolean;
};

export const ContactContent = styled.div<ContactPageProps>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  gap: ${({ isMobile }) => (isMobile ? "24px" : "40px")};
  width: ${({ isMobile }) => (isMobile ? "100%" : "fit-content")};
  align-items: center;
`;

export const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

export const ContactImage = styled.img<ContactPageProps>`
  height: 100%;
  max-height: ${({ isMobile }) => (isMobile ? "340px" : "340px")};
  width: auto;
  max-width: ${({ isMobile }) => (isMobile ? "340px" : "340px")};
  border: 2px solid var(--white);
  border-radius: var(--standardBorderRadius);
`;
