import { FC } from "react";
import {
  AboutCard,
  AboutImage,
  AboutContentCard,
  AboutText,
  AboutHeader,
} from "./aboutContainerStyle";

import cryptoRandomString from "crypto-random-string";

import KrissyImage from "../../../assets/photos/self/KrissyRainbow.jpg";

type AboutContainerProps = {
  isMobile: boolean;
};

const AboutContainer: FC<AboutContainerProps> = ({ isMobile }) => {
  const AboutInformation = [
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "beginnings",
      contentText:
        "My interest in web development started during the wild west days of MySpace ... with a strong, pre-teen desire to implement the coolest cursor effects you could hack together.",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "mission",
      contentText:
        "I love building and delivering great user experiences by developing efficient and delightful frontend features for end users and design systems for fellow developers. I strive to identify opportunities for reducing churn and increasing revenue.",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "...cat?",
      contentText:
        "I have a lovely, chonky cat named Tallulah who has an adventurer's spirit while simultaneously suffering from agoraphobia.",
    },
  ];

  return (
    <AboutCard isMobile={isMobile}>
      <AboutImage src={KrissyImage} alt="krissy" />
      <AboutContentCard>
        {AboutInformation.map((aboutText, index) => (
          <div key={index}>
            <AboutHeader isMobile={isMobile}>
              {aboutText.headerText}
            </AboutHeader>
            <AboutText isMobile={isMobile} key={aboutText.id}>
              {aboutText.contentText}
            </AboutText>
          </div>
        ))}
      </AboutContentCard>
    </AboutCard>
  );
};

export default AboutContainer;
