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
        "After working in client facing positions in onboarding, sales, and marketing for over 10 years, I decided to try my hand at web development professionally in 2018 and never looked back.",
    },
    {
      id: crypto.randomUUID(),
      textSection: "I love building great user experiences - FILL THIS IN.",
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
