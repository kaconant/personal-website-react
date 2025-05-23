import { HomeContainer } from "./homeStyle";
import useMediaQuery from "@/hooks/useMediaQuery";

import PageHeader from "@/components/atoms/HeaderCard";
import AboutContainer from "@/components/blocks/AboutContainer";
import DevExperienceContainer from "@/components/blocks/DevExperienceContainer";
import MarqueeSlider from "@/components/blocks/MarqueeSlider";

const Home = () => {
  const isNarrow = useMediaQuery("(max-width: 1068px)");

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
