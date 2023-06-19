import { FC } from "react";
import {
  AboutCard,
  AboutImage,
  AboutContentCard,
  AboutText,
} from "./aboutContainerStyle";

import KrissyImage from "../../../assets/photos/self/KrissyRainbow.jpg";

type AboutContainerProps = {
  isMobile: boolean;
};

const AboutContainer: FC<AboutContainerProps> = ({ isMobile }) => {
  const AboutInformation = [
    {
      id: crypto.randomUUID(),
      textSection:
        "My interest in web development started during the wild west days of MySpace ... with a strong, preteen desire to implement the coolest glitter cursor effects you could hack together.",
    },
    {
      id: crypto.randomUUID(),
      textSection:
        "I love building and delivering great user experiences by developing efficient and delightful frontend features for end users and design systems for fellow developers. Additionally, I strive to identify opportunities for reducing churn and increasing revenue.",
    },
    {
      id: crypto.randomUUID(),
      textSection:
        "I have a lovely, chonky cat named Tallulah who has an adventurer's spirit while simultatenously suffers from agoraphobia.",
    },
  ];

  return (
    <AboutCard isMobile={isMobile}>
      <AboutImage src={KrissyImage} alt="krissy" />
      <AboutContentCard>
        {AboutInformation.map((aboutText) => (
          <AboutText isMobile={isMobile} key={aboutText.id}>
            {aboutText.textSection}
          </AboutText>
        ))}
      </AboutContentCard>
    </AboutCard>
  );
};

export default AboutContainer;
