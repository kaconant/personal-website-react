import { FC } from "react";
import {
  ProjectContainerCard,
  ProjectCard,
  ProjectImage,
  ProjectText,
} from "./projectContainerStyle";

import FieldEdge from "../../../assets/photos/projects/FieldEdge.png";
import ConditionAssessment from "../../../assets/photos/projects/ConditionAssessment.png";
import RekoMarketing from "../../../assets/photos/projects/RekoMarketing.png";
import CheckoutFlow from "../../../assets/photos/projects/CheckoutFlow.png";
import OliverSpaceDesign from "../../../assets/photos/projects/OliverSpaceDesign.png";
import MyBlendology from "../../../assets/photos/projects/MyBlendology.png";
import RekoDesignSystem from "../../../assets/photos/projects/RekoDesignSystem.png";
import ProductReceiving from "../../../assets/photos/projects/ProductReceiving.png";

import { H3, H4 } from "../../textElements";
import useMediaQuery from "../../../hooks/useMediaQuery";
import cryptoRandomString from "crypto-random-string";

const ProjectContainer: FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const ProjectInformation = [
    {
      id: cryptoRandomString({ length: 10 }),
      title: "Condition Assessment",
      type: "Internal tool / Recommerce",
      devices: "Web - desktop & tablet",
      description:
        "Simple and guided flow that results in accurate and repeatable condition assessments of furniture every time.",
      imgSrc: ConditionAssessment,
    },
    {
      id: cryptoRandomString({ length: 10 }),
      title: "Reko Design System",
      type: "Design system / UX",
      devices: "Web - desktop, mobile, tablet",
      description:
        "Led engineering effort to integrate cohesive design system for all Reko product features.",
      imgSrc: RekoDesignSystem,
    },
    {
      id: cryptoRandomString({ length: 10 }),
      title: "Product Receiving",
      type: "Internal tool / Recommerce",
      devices: "Web - desktop & tablet",
      description:
        "Simple and guided flow that can support the seamless receipt of a returned item in a process where there could exist multiple ways to identify that item.",
      imgSrc: ProductReceiving,
    },
    {
      id: cryptoRandomString({ length: 10 }),
      title: "Reko Marketing Website",
      type: "Customer Facing / Marketing",
      devices: "Web - desktop & mobile",
      description:
        "The Reko Marketing Website was designed as the main landing page for Reko to showcase current products, upcoming features, and FAQ.",
      imgSrc: RekoMarketing,
    },
    {
      id: cryptoRandomString({ length: 10 }),
      title: "Checkout Remodel",
      type: "Customer facing / Recommerce",
      devices: "Web - desktop & mobile",
      description:
        "The checkout flow remodel aimed to reduce complexity in the checkout experience, thereby increasing conversion by encouraging users to successfully complete checking out.",
      imgSrc: CheckoutFlow,
    },
    {
      id: cryptoRandomString({ length: 10 }),
      title: "Oliver Space Design System",
      type: "Design system / UX",
      devices: "Web - desktop, mobile, tablet",
      description:
        "Led engineering effort to integrate cohesive design system for all Oliver Space product features.",
      imgSrc: OliverSpaceDesign,
    },
    {
      id: cryptoRandomString({ length: 10 }),
      title: "Customer Portal",
      type: "Customer facing / CRM",
      devices: "Web - desktop & mobile",
      description:
        "Customer portal enabled our customer's users to confirm field service workorders with a variety of quotes, increasing quickness of appointments and improving upsells.",
      imgSrc: FieldEdge,
    },
    {
      id: cryptoRandomString({ length: 10 }),
      title: "myBlendology",
      type: "User facing / Personal project",
      devices: "Web - desktop & mobile",
      description:
        "A responsive web application that allows you to create diffuser essential oil blends based off of a user's choice of mood. Also includes the option to create a personal user to save signature blends.",
      imgSrc: MyBlendology,
    },
  ];

  return (
    <ProjectContainerCard isMobile={isMobile}>
      {ProjectInformation.map((project) => (
        <ProjectCard key={project.id} isMobile={isMobile}>
          <ProjectText>
            <H3>
              {project.title}
              <H4>({project.type})</H4>
            </H3>
            <H4>Devices: {project.devices}</H4>
            <H4>{project.description}</H4>
          </ProjectText>
          <ProjectImage src={project.imgSrc} alt="project" />
        </ProjectCard>
      ))}
    </ProjectContainerCard>
  );
};

export default ProjectContainer;
