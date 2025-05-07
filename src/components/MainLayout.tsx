import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

import { PageComponent, BackgroundSheet } from "./blocks/Sidebar/sidebarStyle";
import DesktopSidebar from "./blocks/Sidebar/DesktopSidebar";
import MobileSidebar from "./blocks/Sidebar/MobileSidebar";

const MainLayout = ({ children }: { children: JSX.Element }) => {
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

export default MainLayout;
