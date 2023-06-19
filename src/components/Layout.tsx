import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

import {
  PageComponent,
  BackgroundSheet,
} from "../components/elements/sidebar/sidebarStyle";
import DesktopSidebar from "../components/elements/sidebar/DesktopSidebar";
import MobileSidebar from "../components/elements/sidebar/MobileSidebar";

const Layout = ({ children }: { children: JSX.Element }) => {
  const [extendSidebar, setExtendSidebar] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <>
        {isMobile ? (
          <MobileSidebar
            extendSidebar={extendSidebar}
            setExtendSidebar={setExtendSidebar}
          />
        ) : (
          <DesktopSidebar
            extendSidebar={extendSidebar}
            setExtendSidebar={setExtendSidebar}
          />
        )}
      </>
      <PageComponent isMobile={isMobile}>{children}</PageComponent>
      {extendSidebar && <BackgroundSheet />}
    </>
  );
};

export default Layout;
