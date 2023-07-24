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
  isNarrow: boolean;
};

const AboutContainer: FC<AboutContainerProps> = ({ isNarrow }) => {
  const AboutInformation = [
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "beginnings",
      contentText:
        "My interest in web development started during the wild west days of MySpace with a strong, pre-teen desire to implement the coolest cursor effects you could hack together. Over time, I realized the lack of women in STEM and decided it was time to bring my skills and unique perspective to the table.",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "mission",
      contentText:
        "Foremost, I strive to build and deliver great user experiences by developing efficient and delightful frontend features for end users and design systems for fellow developers. Because of my varied background in the tech industry, I focus on working cross-functionally with other departments to identify opportunities to reduce churn and increase revenue. I greatly enjoy mentoring fellow engineers, designers and product managers as well as learning new technologies and methodlogies.",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "...cat?",
      contentText:
        "I have a lovely, chonky cat named Tallulah who has an adventurer's spirit while simultaneously suffering from agoraphobia.",
    },
  ];

  return (
    <AboutCard isNarrow={isNarrow}>
      <AboutImage
        isNarrow={isNarrow}
        src={KrissyImage}
        alt="picture of krissy"
      />
      <AboutContentCard>
        {AboutInformation.map((aboutText, index) => (
          <div key={index}>
            <AboutHeader isNarrow={isNarrow}>
              {aboutText.headerText}
            </AboutHeader>
            <AboutText isNarrow={isNarrow} key={aboutText.id}>
              {aboutText.contentText}
            </AboutText>
          </div>
        ))}
      </AboutContentCard>
    </AboutCard>
  );
};

export default AboutContainer;
