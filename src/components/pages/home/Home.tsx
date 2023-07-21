import { lazy, Suspense } from "react";
import { HomeContainer } from "./homeStyle";
import useMediaQuery from "../../../hooks/useMediaQuery";

import PageHeader from "../../atoms/pageHeader/PageHeader";
import AboutContainer from "../../elements/aboutContainer/AboutContainer";
import DevExperienceContainer from "../../elements/devExperienceContainer/DevExperienceContainer";

const MarqueeSlider = lazy(
  () => import("../../elements/marqueeSlider/MarqueeSlider")
);

const Home = () => {
  const isNarrow = useMediaQuery("(max-width: 900px)");
  const renderLoader = () => <p>Loading</p>;

  return (
    <>
      <HomeContainer>
        <PageHeader
          headerText="hi, i'm Krissy"
          subheaderText="an ATL-based senior frontend software developer"
        />
        <MarqueeSlider />
        <AboutContainer isNarrow={isNarrow} />
        <Suspense fallback={renderLoader()}>
          <DevExperienceContainer isNarrow={isNarrow} />
        </Suspense>
      </HomeContainer>
    </>
  );
};

export default Home;
