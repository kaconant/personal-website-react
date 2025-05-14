import styled from "styled-components";
import { H3Bold } from "../Typography";
import { HTMLAttributes } from "react";

type MainLayoutProps = {
  isNarrow?: boolean;
} & HTMLAttributes<HTMLElement>;

export const PageComponent = styled.main<MainLayoutProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: ${({ isNarrow }) =>
    isNarrow ? "0" : "var(--desktopClosedSidebarWidth)"};
  background: repeating-linear-gradient(
    to right,
    #ffb3f3,
    #ffc6ec,
    #c9b6ff,
    #b3e5ff,
    #d1ffd6,
    #fff7b3,
    #ffb3f3
  );
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 40px;
  padding-top: ${({ isNarrow }) =>
    isNarrow
      ? "var(--mobilePaddingTopHeight)"
      : "var(--desktopPaddingTopHeight)"};
  min-height: 100vh;

  &:focus {
    outline: 3px solid #ffa500; // Add a visible outline to confirm focus
    outline-offset: 4px;
  }
`;

export const BackgroundSheet = styled.div`
  z-index: var(--midZIndex);
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  touch-action: none;
  border: none;
  pointer-events: auto;
  opacity: 1;
`;
