import styled from "styled-components/macro";

type ContactPageProps = {
  isNarrow?: boolean;
};

export const ContactContent = styled.section<ContactPageProps>`
  display: flex;
  flex-direction: ${({ isNarrow }) => (isNarrow ? "column" : "row")};
  gap: ${({ isNarrow }) => (isNarrow ? "24px" : "40px")};
  width: ${({ isNarrow }) => (isNarrow ? "100%" : "fit-content")};
  align-items: center;
`;

export const ContactPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

export const ContactImage = styled.img`
  aspect-ratio: auto 340 / 340;
  height: 100%;
  max-height: 340px;
  width: auto;
  max-width: 340px;
  border: 2px solid var(--white);
  border-radius: var(--standardBorderRadius);
`;
