import GlobalStyle from "../src/globalStyles";
import { Routes, Route } from "react-router-dom";
import { SIDEBAR_PATHS } from "./components/blocks/Sidebar/SidebarPaths";
import ScrollToTop from "./hooks/useScrollToTop";

//Components
import MainLayout from "./components/MainLayout";
import SidebarItems from "./components/blocks/Sidebar/SidebarList";
import NotFound from "./components/pages/notFound/NotFound";

function App() {
  return (
    <div className="App" role="main">
      <GlobalStyle />
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<SidebarItems />}>
            {SIDEBAR_PATHS.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={<item.component />}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
