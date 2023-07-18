import styled from "styled-components/macro";
import { H3 } from "../../textElements";

type ContactCardProps = {
  isNarrow?: boolean;
};

export const ContactCard = styled.div<ContactCardProps>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background: var(--grayscale2);
  border: 3px solid var(--grayscale4);
  border-radius: var(--standardBorderRadius);
  align-self: center;
  align-items: center;
  width: auto;
  min-width: ${({ isNarrow }) => (isNarrow ? "100%" : "340px")};
`;

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
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
  gap: 24px;
  width: 100%;
  bottom: 0px;
  margin: 0;
`;
