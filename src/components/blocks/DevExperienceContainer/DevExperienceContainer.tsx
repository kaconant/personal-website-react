import { FC } from "react";
import PageHeader from "@/components/atoms/HeaderCard";
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

type DevExperienceType = {
  id: string;
  headerText: string;
  contentText: string;
};

const DevExperience: DevExperienceType[] = [
  {
    id: cryptoRandomString({ length: 10 }),
    headerText: "Languages & Frameworks",
    contentText:
      "TypeScript, JavaScript, React, Vue 2/3, Node.js, Next.js, C#, HTML, CSS",
  },
  {
    id: cryptoRandomString({ length: 10 }),
    headerText: "Libraries & State Management",
    contentText:
      "React Query, Redux Toolkit, Apollo GraphQL, Axios, Vuex, Knockout",
  },
  {
    id: cryptoRandomString({ length: 10 }),
    headerText: "Testing Tools",
    contentText: "Jest, React Testing Library, Cypress, GitHub Actions",
  },
  {
    id: cryptoRandomString({ length: 10 }),
    headerText: "Styling & Layout",
    contentText:
      "Styled Components, Tailwind CSS, Bootstrap, SCSS, Flexbox, Grid, CSS Modules",
  },
  {
    id: cryptoRandomString({ length: 10 }),
    headerText: "Developer Tools",
    contentText:
      "GitHub, VS Code, Storybook, Postman, Jira, Notion, GitHub Copilot, ChatGPT",
  },
  {
    id: cryptoRandomString({ length: 10 }),
    headerText: "Accessibility & DX Contributions",
    contentText:
      "Custom a11y npm packages, internal documentation hubs, platform strategy for 30+ teams",
  },
  {
    id: cryptoRandomString({ length: 10 }),
    headerText: "Product & Team Collaboration",
    contentText:
      "Scrum ceremonies, mentorship, roadmap planning, stakeholder alignment",
  },
  {
    id: cryptoRandomString({ length: 10 }),
    headerText: "Tech Industry Focus Areas",
    contentText:
      "SaaS (B2B/B2C), Ecommerce, CRM, Developer Tools, Accessibility, AI-assisted workflows",
  },
];

const DevExperienceContainer: FC<DevExperienceProps> = ({ isNarrow }) => {
  return (
    <DevExperienceSection aria-label="Development Experience Section">
      <PageHeader headerText="MySpace Top 8" isHero={false} />
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
