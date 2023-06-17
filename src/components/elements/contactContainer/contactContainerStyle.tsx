import styled from "styled-components/macro";
import { H2 } from "../../textElements";

type ContactCardProps = {
  isMobile: boolean;
};

export const ContactCard = styled.div<ContactCardProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: var(--midPink);
  border: 3px solid var(--lightPink);
  align-self: center;
  width: ${({ isMobile }) => (isMobile ? "inherit" : "fit-content")};
`;

export const ContactLinks = styled.div<ContactCardProps>`
  display: flex;
  gap: ${({ isMobile }) => (isMobile ? "8px" : "32px")};
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
`;

export const ContactInfo = styled(H2)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--black);
`;
