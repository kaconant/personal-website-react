import { FC } from "react";
import PageHeader from "@/components/atoms/PageHeader";
import {
  DevExperienceSection,
  DevExpertiseCard,
  Section,
  SectionContent,
  SectionHeader,
} from "./devExperienceStyle";

import cryptoRandomString from "crypto-random-string";

type DevExperienceProps = {
  isNarrow: boolean;
};

const DevExperienceContainer: FC<DevExperienceProps> = ({ isNarrow }) => {
  const DevExperience = [
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "Languages & Frameworks",
      contentText:
        "JavaScript, TypeScript, React, Vue 2 / 3, Vuex, Nodejs, Nextjs, Knockout, C#",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "Libraries",
      contentText:
        "Apollo GraphQL, React Query, Jest, React Testing Library, Axios",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "CSS skills",
      contentText:
        "Styled Components, Tailwind, Bootstrap, Flexbox, Grid, SCSS",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "Developer tools",
      contentText:
        "Github, Heroku, Storyblok, Storybook, Sentry, Postman, Visual Studio Code",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "Product & design tools",
      contentText:
        "Jira, Notion, Figma, Google Optimize, StatSig AB Testing, Heap Analytics",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "Favorite extensions",
      contentText:
        "Lighthouse, A11ygator, Wappalyzer, React DevTools, Apollo DevTools",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "Project management styles",
      contentText: "Agile, Scrum, Kanban, Waterfall",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      headerText: "Tech company experience",
      contentText:
        "Customer success, Project management, Inbound Marketing, Event planning",
    },
  ];

  return (
    <DevExperienceSection aria-label="Development Experience Section">
      <PageHeader
        headerText="myspace top 8 list"
        subheaderText="with my professional experience"
      />
      <DevExpertiseCard isNarrow={isNarrow}>
        {DevExperience.map((experience) => (
          <Section key={experience.id}>
            <SectionHeader>{experience.headerText}</SectionHeader>
            <SectionContent>{experience.contentText}</SectionContent>
          </Section>
        ))}
      </DevExpertiseCard>
    </DevExperienceSection>
  );
};

export default DevExperienceContainer;
