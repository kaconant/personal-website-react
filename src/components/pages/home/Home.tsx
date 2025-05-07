import { HomeContainer } from "./homeStyle";
import useMediaQuery from "@/hooks/useMediaQuery";

import PageHeader from "@/components/atoms/PageHeader";
import AboutContainer from "@/components/blocks/AboutContainer/AboutContainer";
import DevExperienceContainer from "@/components/blocks/DevExperienceContainer/DevExperienceContainer";
import MarqueeSlider from "@/components/blocks/MarqueeSlider/MarqueeSlider";

const Home = () => {
  const isNarrow = useMediaQuery("(max-width: 900px)");

  return (
    <HomeContainer aria-label="Home Page">
      <PageHeader
        headerText="hiya, i'm Krissy"
        subheaderText="Senior Frontend Engineer - ATL"
      />
      <MarqueeSlider />
      <AboutContainer isNarrow={isNarrow} />
      <DevExperienceContainer isNarrow={isNarrow} />
    </HomeContainer>
  );
};

export default Home;
