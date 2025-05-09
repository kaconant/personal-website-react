import styled from "styled-components";
import { H3Bold } from "../../Typography";
import { HTMLAttributes } from "react";

type MainLayoutProps = {
  isNarrow?: boolean;
  extendSidebar?: boolean;
} & HTMLAttributes<HTMLElement>;

const SidebarContainer = styled.nav<MainLayoutProps>`
  display: flex;
  position: fixed;
  padding: ${({ isNarrow }) => (isNarrow ? "24px" : "40px")};
  background-color: var(--accentPurple);
  transition:
    width 350ms ease,
    height 350ms ease;
  overflow-x: hidden;
  z-index: var(--topZIndex);
`;

export const DesktopSidebarContainer = styled(
  SidebarContainer,
)<MainLayoutProps>`
  width: ${({ extendSidebar }) =>
    extendSidebar ? "165px" : "var(--desktopClosedSidebarWidth)"};
  height: 100%;
  border: 2px solid var(--accentDarkPurple);
  border-top: none;
  border-bottom: none;
`;

export const MobileSidebarContainer = styled(SidebarContainer)<MainLayoutProps>`
  width: 100vw;
  height: ${({ extendSidebar }) =>
    extendSidebar ? "280px" : "var(--mobileClosedSidebarWidth)"};
  overflow-y: hidden;
  border: 2px solid var(--accentDarkPurple);
  border-left: none;
  border-right: none;
`;

export const SidebarWrapper = styled.div<MainLayoutProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: ${({ isNarrow }) => (isNarrow ? "center" : "none")};
`;

export const SidebarTop = styled.section``;

export const SidebarDesktopHeader = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const SidebarMobileHeader = styled(SidebarDesktopHeader)`
  justify-content: center;
`;

export const SidebarToggleIcon = styled.img<MainLayoutProps>`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const SidebarListContainer = styled.ul<MainLayoutProps>`
  list-style: none;
  display: ${({ extendSidebar }) => (extendSidebar ? "block" : "none")};
`;

export const SidebarListItem = styled.li<MainLayoutProps>`
  display: flex;
  justify-content: ${({ isNarrow }) => (isNarrow ? "center" : "none")};
  margin-top: 8px;
  width: 100%;
  padding: 8px 4px 8px 0;
  border-radius: var(--standardBorderRadius);
  cursor: pointer;
`;

export const SidebarListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--black);
`;

export const SidebarListItemName = styled(H3Bold)<MainLayoutProps>`
  margin-bottom: 0;
  color: var(--black);

  &:hover {
    color: var(--grayscale6);
  }
`;

export const PageComponent = styled.main<MainLayoutProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: ${({ isNarrow }) =>
    isNarrow ? "0" : "var(--desktopClosedSidebarWidth)"};
  background-color: var(--secondaryColor);
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

export const LinkContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  width: 100%;
  bottom: 0px;
  margin: 0;
`;
