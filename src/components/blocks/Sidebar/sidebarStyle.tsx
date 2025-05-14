import styled from "styled-components";
import { H3Bold } from "../../Typography";
import { HTMLAttributes } from "react";

type SidebarProps = {
  isNarrow?: boolean;
  extendSidebar?: boolean;
} & HTMLAttributes<HTMLElement>;

const SidebarContainer = styled.nav<SidebarProps>`
  display: flex;
  position: fixed;
  padding: ${({ isNarrow }) => (isNarrow ? "24px" : "40px")};
  background-color: var(--secondaryColor);
  transition:
    width 350ms ease,
    height 350ms ease;
  overflow-x: hidden;
  z-index: var(--topZIndex);
`;

export const DesktopSidebarContainer = styled(SidebarContainer)<SidebarProps>`
  width: ${({ extendSidebar }) =>
    extendSidebar ? "165px" : "var(--desktopClosedSidebarWidth)"};
  height: 100%;
  border-right: 2px solid var(--accentRose);
`;

export const MobileSidebarContainer = styled(SidebarContainer)<SidebarProps>`
  width: 100vw;
  height: ${({ extendSidebar }) =>
    extendSidebar ? "280px" : "var(--mobileClosedSidebarWidth)"};
  overflow-y: hidden;
  border-bottom: 2px solid var(--accentRose);
`;

export const SidebarWrapper = styled.div<SidebarProps>`
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

export const SidebarListItemName = styled(H3Bold)<SidebarProps>`
  margin-bottom: 0;
  color: var(--textColor);

  &:hover {
    color: var(--accentRaspberry);
  }
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
