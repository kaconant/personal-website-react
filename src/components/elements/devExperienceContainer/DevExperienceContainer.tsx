import { FC } from "react";
import PageHeader from "../../atoms/pageHeader/PageHeader";
import {
  DevExpertiseCard,
  Section,
  SectionContent,
  SectionHeader,
} from "./devExperienceStyle";

import cryptoRandomString from "crypto-random-string";

type DevExperienceProps = {
  isMobile: boolean;
};

const DevExperienceContainer: FC<DevExperienceProps> = ({ isMobile }) => {
  const DevExperience = [
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "Areas of dev experience",
      contentText:
        "Recommerce, Ecommerce, CRM, Internal tools, Design systems, UX",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "Tech company experience",
      contentText:
        "Customer success, Project management, Inbound Marketing, Event planning",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "Languages / frameworks",
      contentText:
        "JavaScript, TypeScript, React, Vue 2, Vue 3, Vuex, Nextjs, Knockout",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "Libraries",
      contentText: "Apollo GraphQL, Jest, React Testing Library",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "CSS skills",
      contentText: "SCSS, Flexbox, Grid, Styled Components, Bootstrap",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "Developer tools",
      contentText:
        "Github, Heroku, Storyblok, Storybook, Sentry, Postman, Visual Studio Code",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "Product / design tools",
      contentText: "Heap, Jira, Notion, Figma, Google Optimize",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "Favorite extensions",
      contentText:
        "Lighthouse, A11ygator, Wappalyzer, React DevTools, Apollo DevTools",
    },
  ];

  return (
    <>
      <PageHeader
        headerText="myspace top 8 list"
        subheaderText="with my professional experience"
      />
      <DevExpertiseCard isMobile={isMobile}>
        {DevExperience.map((experience) => (
          <Section key={experience.id}>
            <SectionHeader>{experience.headerText}</SectionHeader>
            <SectionContent>{experience.contentText}</SectionContent>
          </Section>
        ))}
      </DevExpertiseCard>
    </>
  );
};

export default DevExperienceContainer;
