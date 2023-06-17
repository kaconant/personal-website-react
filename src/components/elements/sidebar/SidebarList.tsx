import React, { FC, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  SidebarListContainer,
  SidebarListItem,
  SidebarListItemWrapper,
  SidebarListItemName,
} from "./sidebarStyle";
import { SIDEBAR_PATHS } from "./SidebarPaths";
import useMediaQuery from "../../../hooks/useMediaQuery";

interface SidebarListProps {
  extendSidebar?: boolean;
  onClickLink?: React.MouseEventHandler<HTMLElement>;
}

const SidebarList: FC<SidebarListProps> = ({ extendSidebar, onClickLink }) => {
  const [activeItem, setActiveItem] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <SidebarListContainer extendSidebar={extendSidebar}>
        {SIDEBAR_PATHS.map((itemData, index) => (
          <SidebarListItem
            key={index}
            isMobile={isMobile}
            onClick={() => setActiveItem(index)}
            className={index === activeItem ? "active" : ""}
          >
            <Link
              className="sidebar-list-link"
              to={itemData.rootUrl}
              onClick={onClickLink}
            >
              <SidebarListItemWrapper>
                <SidebarListItemName>{itemData.name}</SidebarListItemName>
              </SidebarListItemWrapper>
            </Link>
          </SidebarListItem>
        ))}
      </SidebarListContainer>
      <Outlet />
    </>
  );
};

export default SidebarList;
