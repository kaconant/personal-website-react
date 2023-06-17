import { HomeContainer } from "./homeStyle";
import useMediaQuery from "../../../hooks/useMediaQuery";

import PageHeader from "../../atoms/pageHeader/PageHeader";
import AboutContainer from "../../elements/aboutContainer/AboutContainer";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <HomeContainer isMobile={isMobile}>
        <PageHeader
          headerText="hi, i'm Krissy"
          subheaderText="an ATL-based frontend software developer"
        />
        <AboutContainer isMobile={isMobile}/>
      </HomeContainer>
    </>
  );
};

export default Home;
