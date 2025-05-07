import Marquee from "react-fast-marquee";
import cryptoRandomString from "crypto-random-string";
import { MarqueeContainer, MarqueeFocusPoint } from "./marqueSliderStyle";

const MarqueeSlider = () => {
  const DevFocusPoints = [
    {
      id: cryptoRandomString({ length: 10 }),
      contentText: "Recommerce and ecommerce platforms",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      contentText: "Migrating between languages",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      contentText: "Building responsive design systems",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      contentText: "Authoring component libraries",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      contentText: "Developing internal tools",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      contentText: "Designing CRM and dashboards",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      contentText: "Enhancing user experience (UX)",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      contentText: "Creating landing pages with headless CMS",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      contentText: "Implementing WCAG accessibility standards",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      contentText: "Writing developer onboarding docs",
    },
  ];

  return (
    <section aria-label="Marquee Scroller">
      <Marquee speed={20} pauseOnClick>
        <MarqueeContainer>
          {DevFocusPoints.map((focusPoint) => (
            <MarqueeFocusPoint key={focusPoint.id}>
              {focusPoint.contentText}
            </MarqueeFocusPoint>
          ))}
        </MarqueeContainer>
      </Marquee>
    </section>
  );
};

export default MarqueeSlider;
