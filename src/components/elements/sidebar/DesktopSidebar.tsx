import React, { FC, useRef } from "react";
import SidebarList from "./SidebarList";
import HamburgerMenu from "../../../assets/icons/HamburgerMenu.svg";

import {
  DesktopSidebarContainer,
  SidebarWrapper,
  SidebarHeader,
  SidebarTop,
  SidebarToggleIcon,
  LinkContainer,
} from "./sidebarStyle";
import useOutsideClick from "../../../hooks/useOutsideClick";
import ImageLink from "../../atoms/imageLink/ImageLink";

import Resume from "../../../assets/pdf/KrissyConantResume2023.pdf";
import LinkedIn from "../../../assets/icons/linkedin.svg";
import GitHub from "../../../assets/icons/github.svg";
import Email from "../../../assets/icons/email.svg";
import ResumeIcon from "../../../assets/icons/resume.svg";
import { useLocation } from "react-router-dom";

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

  let routeLocation = useLocation();
  const isContactPage = routeLocation.pathname === "/contact";

  return (
    <>
      <DesktopSidebarContainer
        ref={refWrapper}
        extendSidebar={extendSidebar}
        isMobile={false}
      >
        <SidebarWrapper isMobile={false}>
          <SidebarTop>
            <SidebarHeader>
              <SidebarToggleIcon
                src={HamburgerMenu}
                alt="nav hamburger menu"
                extendSidebar={extendSidebar}
                onClick={() => setExtendSidebar((currState) => !currState)}
              />
            </SidebarHeader>
            <SidebarList
              extendSidebar={extendSidebar}
              onClickLink={() => setExtendSidebar(false)}
            />
          </SidebarTop>
          {!isContactPage && (
            <LinkContainer>
              <ImageLink
                href="https://www.linkedin.com/in/krissy-conant/"
                imgSrc={LinkedIn}
              />
              <ImageLink href="https://github.com/kaconant" imgSrc={GitHub} />
              <ImageLink href="mailto:krissyconant@gmail.com" imgSrc={Email} />
              <ImageLink href={Resume} imgSrc={ResumeIcon} />
            </LinkContainer>
          )}
        </SidebarWrapper>
      </DesktopSidebarContainer>
    </>
  );
};

export default DesktopSidebar;
