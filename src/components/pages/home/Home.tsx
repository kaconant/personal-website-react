import { HomeContainer } from "./homeStyle";
import useMediaQuery from "../../../hooks/useMediaQuery";

import PageHeader from "../../atoms/pageHeader/PageHeader";
import AboutContainer from "../../elements/aboutContainer/AboutContainer";
import DevExperienceContainer from "../../elements/devExperienceContainer/DevExperienceContainer";
import MarqueeSlider from "../../elements/marqueeSlider/MarqueeSlider";

const Home = () => {
  const isNarrow = useMediaQuery("(max-width: 900px)");

  return (
    <HomeContainer aria-label="Home Page">
      <PageHeader
        headerText="hi, i'm Krissy"
        subheaderText="an ATL-based senior frontend software developer"
      />
      <MarqueeSlider />
      <AboutContainer isNarrow={isNarrow} />
      <DevExperienceContainer isNarrow={isNarrow} />
    </HomeContainer>
  );
};

export default Home;
