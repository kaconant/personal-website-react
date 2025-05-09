import styled from "styled-components";
import { H3 } from "../../Typography";

type ContactCardProps = {
  isNarrow?: boolean;
};

export const ContactCard = styled.section<ContactCardProps>`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 24px;
  background: var(--white);
  border: 2px solid var(--accentGreen);
  border-radius: var(--standardBorderRadius);
  align-self: center;
  align-items: center;
  width: auto;
  min-width: ${({ isNarrow }) => (isNarrow ? "100%" : "340px")};
`;

export const ContactLinks = styled.ol`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const ImageLinkContainer = styled.li`
  display: flex;
`;

export const ContactInfo = styled(H3)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 48px;
  width: 100%;
  bottom: 0px;
  margin: 0;
`;
