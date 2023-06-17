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
  background-color: var(--lightBlue);
  border: 1px solid var(--midAqua);
  transition: width 350ms ease, height 350ms ease;
  overflow-x: hidden;
  z-index: var(--topZIndex);
`;

export const DesktopSidebarContainer = styled(SidebarContainer)<SidebarProps>`
  width: ${({ extendSidebar }) =>
    extendSidebar ? "150px" : "var(--desktopClosedSidebarWidth)"};
  height: 100%;
`;

export const MobileSidebarContainer = styled(SidebarContainer)<SidebarProps>`
  width: 100%;
  height: ${({ extendSidebar }) =>
    extendSidebar ? "240px" : "var(--mobileClosedSidebarWidth)"};
  overflow-y: hidden;
`;

export const SidebarWrapper = styled.div<SidebarProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ isMobile }) => (isMobile ? "center" : "none")};
`;

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

// TODO: Min-height issue with footer
export const PageComponent = styled.div<SidebarProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: ${({ isMobile }) =>
    isMobile ? "0" : "var(--desktopClosedSidebarWidth)"};
  background-color: var(--midBlue);
  padding-left: 40px;
  padding-right: 40px;
  padding-top: ${({ isMobile }) =>
    isMobile
      ? "var(--mobilePaddingTopHeight)"
      : "var(--desktopPaddingTopHeight)"};
  height: 100%;
  min-height: calc(100vh - 66px);
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
