import React, { FC, useRef } from "react";
import { useLocation } from "react-router-dom";
import useOutsideClick from "@/hooks/useOutsideClick";

import {
  DesktopSidebarContainer,
  SidebarWrapper,
  SidebarDesktopHeader,
  SidebarTop,
  SidebarToggleIcon,
  LinkContainer,
} from "./sidebarStyle";
import HamburgerMenu from "@/assets/icons/HamburgerMenu.svg";
import Resume from "@/assets/pdf/KrissyConantResume2023.pdf";
import LinkedIn from "@/assets/icons/linkedin.svg";
import GitHub from "@/assets/icons/github.svg";
import Email from "@/assets/icons/email.svg";
import File from "@/assets/icons/file.svg";
import Folder from "@/assets/icons/folder.svg";

import SidebarList from "./SidebarList";
import ImageLink from "@/components/atoms/ImageLink";
import cryptoRandomString from "crypto-random-string";

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

  const SidebarLinks = [
    {
      id: cryptoRandomString({ length: 10 }),
      href: "https://www.linkedin.com/in/krissy-conant/",
      imgSrc: LinkedIn,
      tooltip: "LinkedIn",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      href: "https://github.com/kaconant",
      imgSrc: GitHub,
      tooltip: "GitHub",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      href: "mailto:krissyconant@gmail.com",
      imgSrc: Email,
      tooltip: "Email",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      href: Resume,
      imgSrc: File,
      tooltip: "Resume",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      href: "https://krissy-conant.notion.site/00cfc96784af43c1931cf3341e21ef7f?v=712e36f87c45461581e7f60da2837c90&pvs=4",
      imgSrc: Folder,
      tooltip: "Wiki",
    },
  ];

  return (
    <DesktopSidebarContainer
      ref={refWrapper}
      extendSidebar={extendSidebar}
      isNarrow={false}
    >
      <SidebarWrapper isNarrow={false}>
        <SidebarTop aria-label="Sidebar Desktop Route List">
          <SidebarDesktopHeader>
            <SidebarToggleIcon
              src={HamburgerMenu}
              alt="nav hamburger menu"
              extendSidebar={extendSidebar}
              onClick={() => setExtendSidebar((currState) => !currState)}
            />
          </SidebarDesktopHeader>
          <SidebarList
            extendSidebar={extendSidebar}
            onClickLink={() => setExtendSidebar(false)}
          />
        </SidebarTop>
        {!isContactPage && (
          <LinkContainer aria-label="Sidebar Link Icons">
            {SidebarLinks.map((sidebarLink) => (
              <ImageLink
                key={sidebarLink.id}
                href={sidebarLink.href}
                imgSrc={sidebarLink.imgSrc}
                tooltip={sidebarLink.tooltip}
              />
            ))}
          </LinkContainer>
        )}
      </SidebarWrapper>
    </DesktopSidebarContainer>
  );
};

export default DesktopSidebar;
