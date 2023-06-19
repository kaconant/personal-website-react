import { FC } from "react";
import PageHeader from "../../atoms/pageHeader/PageHeader";
import {
  DevExpertiseCard,
  Section,
  SectionContent,
  SectionHeader,
} from "./devExperienceStyle";

type DevExperienceProps = {
  isMobile: boolean;
};

const DevExperienceContainer: FC<DevExperienceProps> = ({ isMobile }) => {
  const DevExperience = [
    {
      id: crypto.randomUUID(),
      headerText: "areas of dev experience",
      contentText:
        "Recommerce, Ecommerce, CRM, Internal tools, Design systems, UX",
    },
    {
    id: crypto.randomUUID(),
      headerText: "tech company experience",
      contentText:
        "Customer success, Project management, Inbound Marketing, Event planning",
    },
    {
      id: crypto.randomUUID(),
      headerText: "languages / frameworks",
      contentText:
        "JavaScript, TypeScript, React, Vue 2, Vue 3, Vuex, Nextjs, Knockout",
    },
    {
      id: crypto.randomUUID(),
      headerText: "libraries",
      contentText: "Apollo GraphQL, Jest, React Testing Library",
    },
    {
      id: crypto.randomUUID(),
      headerText: "css skills",
      contentText: "SCSS, Flexbox, Grid, Styled Components, Bootstrap",
    },
    {
      id: crypto.randomUUID(),
      headerText: "developer tools",
      contentText:
        "Github, Heroku, Storyblok, Storybook, Sentry, Postman, Visual Studio Code",
    },
    {
      id: crypto.randomUUID(),
      headerText: "product / design tools",
      contentText: "Heap, Jira, Notion, Figma, Heap, Google Optimize",
    },
    {
      id: crypto.randomUUID(),
      headerText: "favorite extensions",
      contentText:
        "Lighthouse, A11ygator, Wappalyzer, React DevTools, Apollo DevTools",
    },
  ];

  return (
    <>
      <PageHeader headerText="professional experience" />
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
