import React, { FC, useRef } from "react";
import SidebarList from "./SidebarList";
import HamburgerMenu from "@/assets/icons/HamburgerMenu.svg";

import {
  MobileSidebarContainer,
  SidebarWrapper,
  SidebarMobileHeader,
  SidebarToggleIcon,
  SidebarTop,
} from "./sidebarStyle";
import useOutsideClick from "@/hooks/useOutsideClick";

interface DesktopSidebarProps {
  extendSidebar: boolean;
  setExtendSidebar: (value: React.SetStateAction<boolean>) => void;
}

const DesktopSidebar: FC<DesktopSidebarProps> = ({
  extendSidebar,
  setExtendSidebar,
}) => {
  const refWrapper = useRef<any>();
  useOutsideClick(refWrapper, () => setExtendSidebar(false));

  return (
    <MobileSidebarContainer
      ref={refWrapper}
      extendSidebar={extendSidebar}
      isNarrow={true}
    >
      <SidebarWrapper isNarrow={true}>
        <SidebarTop aria-label="Sidebar Mobile Route List">
          <SidebarMobileHeader>
            <SidebarToggleIcon
              src={HamburgerMenu}
              alt="nav hamburger menu"
              extendSidebar={extendSidebar}
              onClick={() => setExtendSidebar((currState) => !currState)}
            />
          </SidebarMobileHeader>
          <SidebarList
            extendSidebar={extendSidebar}
            onClickLink={() => setExtendSidebar(false)}
          />
        </SidebarTop>
      </SidebarWrapper>
    </MobileSidebarContainer>
  );
};

export default DesktopSidebar;
