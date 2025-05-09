import styled from "styled-components";

export const SkipLinkElement = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background-color: #000;
  color: #fff;
  padding: 8px 16px;
  z-index: 1000;
  text-decoration: none;
  font-size: 16px;
  border-radius: 4px;
  transition: top 0.3s ease;

  &:focus {
    top: 1rem;
  }
`;
