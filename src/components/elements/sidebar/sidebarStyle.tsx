import styled from "styled-components/macro";
import { H3 } from "../../textElements";

interface SidebarProps {
  extendSidebar?: boolean;
  isMobile?: boolean;
}

const SidebarContainer = styled.div<SidebarProps>`
  display: flex;
  position: fixed;
  padding: ${({ isMobile }) => (isMobile ? "24px" : "40px")};
  background-color: var(--shell);
  border: 2px solid var(--grayscale4);
  transition: width 350ms ease, height 350ms ease;
  overflow-x: hidden;
  z-index: var(--topZIndex);
`;

export const DesktopSidebarContainer = styled(SidebarContainer)<SidebarProps>`
  width: ${({ extendSidebar }) =>
    extendSidebar ? "165px" : "var(--desktopClosedSidebarWidth)"};
  height: 100%;
`;

export const MobileSidebarContainer = styled(SidebarContainer)<SidebarProps>`
  width: 100vw;
  height: ${({ extendSidebar }) =>
    extendSidebar ? "280px" : "var(--mobileClosedSidebarWidth)"};
  overflow-y: hidden;
`;

export const SidebarWrapper = styled.div<SidebarProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: ${({ isMobile }) => (isMobile ? "center" : "none")};
`;

export const SidebarTop = styled.div``;

export const SidebarHeader = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const SidebarToggleIcon = styled.img<SidebarProps>`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const SidebarListContainer = styled.ul<SidebarProps>`
  list-style: none;
  display: ${({ extendSidebar }) => (extendSidebar ? "block" : "none")};
`;

export const SidebarListItem = styled.li<SidebarProps>`
  display: flex;
  justify-content: ${({ isMobile }) => (isMobile ? "center" : "none")};
  margin-top: 8px;
  width: 100%;
  padding: 8px 4px 8px 0;
  border-radius: 6px;
  cursor: pointer;
`;

export const SidebarListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--black);
`;

export const SidebarListItemName = styled(H3)<SidebarProps>`
  margin-bottom: 0;
  color: var(--black);

  &:hover {
    color: var(--grayscale6);
  }
`;

export const PageComponent = styled.div<SidebarProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: ${({ isMobile }) =>
    isMobile ? "0" : "var(--desktopClosedSidebarWidth)"};
  background-color: var(--lightPurple);
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 40px;
  padding-top: ${({ isMobile }) =>
    isMobile
      ? "var(--mobilePaddingTopHeight)"
      : "var(--desktopPaddingTopHeight)"};
  min-height: 100vh;
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

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  bottom: 0px;
  margin: 0;
`;
