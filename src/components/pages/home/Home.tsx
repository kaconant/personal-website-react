import { HomeContainer } from "./homeStyle";
import useMediaQuery from "../../../hooks/useMediaQuery";

import PageHeader from "../../atoms/pageHeader/PageHeader";
import AboutContainer from "../../elements/aboutContainer/AboutContainer";
import DevExperienceContainer from "../../elements/devExperienceContainer/DevExperienceContainer";
import MarqueeSlider from "../../elements/marqueeSlider/MarqueeSlider";

const Home = () => {
  const isNarrow = useMediaQuery("(max-width: 1000px)");

  return (
    <>
      <HomeContainer>
        <PageHeader
          headerText="hi, i'm Krissy"
          subheaderText="an ATL-based senior frontend software developer"
        />
        <MarqueeSlider />
        <AboutContainer isMobile={isNarrow} />
        <DevExperienceContainer isMobile={isNarrow} />
      </HomeContainer>
    </>
  );
};

export default Home;
