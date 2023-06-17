import GlobalStyle from "../src/globalStyles";
import { Routes, Route } from "react-router-dom";
import { SIDEBAR_PATHS } from "./components/elements/sidebar/SidebarPaths";

//Components
import Layout from "../src/components/Layout";
import SidebarItems from "./components/elements/sidebar/SidebarList";
import NotFound from "./components/pages/notFound/NotFound";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Layout>
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
      </Layout>
    </div>
  );
}

export default App;
