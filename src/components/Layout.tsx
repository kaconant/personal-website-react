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
  const isNarrow = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {isNarrow ? (
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
      <PageComponent isNarrow={isNarrow}>{children}</PageComponent>
      {extendSidebar && <BackgroundSheet />}
    </>
  );
};

export default Layout;
