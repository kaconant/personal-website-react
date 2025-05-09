import { FC } from "react";
import {
  AboutCard,
  AboutImage,
  AboutContentCard,
  AboutText,
  AboutHeader,
} from "./aboutContainerStyle";

import cryptoRandomString from "crypto-random-string";

import KrissyImage from "@/assets/photos/self/KrissyRainbow.jpg";

type AboutContainerProps = {
  isNarrow: boolean;
};

const AboutContainer: FC<AboutContainerProps> = ({ isNarrow }) => {
  const AboutInformation = [
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "past",
      contentText:
        "My interest in web development started in the MySpace days, driven by a pre-teen desire to hack together custom cursors and layouts. Over time, I became aware of the lack of women in tech and felt called to bring my skills and perspective to the table.",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "future",
      contentText:
        "As a Senior Frontend Engineer, I love the mix of strategy, problem-solving, and empathy it takes to build features that actually make life better for users. I'm passionate about shaping roadmaps, refining design systems, and smoothing out the little pain points in both customer journeys and developer workflows. I work best cross-functionally, where I can connect dots, reduce churn, and help teams build things that truly matter.",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "...cat?",
      contentText:
        "I have a lovely, chonky cat named Tallulah who is equal parts bold adventurer and nervous homebody.",
    },
  ];

  return (
    <AboutCard isNarrow={isNarrow} aria-label="About Me Section">
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
