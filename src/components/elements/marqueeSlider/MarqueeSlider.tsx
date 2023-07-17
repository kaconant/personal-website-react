import Marquee from "react-fast-marquee";
import cryptoRandomString from "crypto-random-string";
import { MarqueeContainer, MarqueeFocusPoint } from "./marqueSliderStyle";

const MarqueeSlider = () => {
  const DevFocusPoints = [
    {
      id: cryptoRandomString({ length: 10 }),
      contentText: "Recommerce / Ecommerce",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      contentText: "Frontend language migrations",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      contentText: "Internal tools",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      contentText: "CRM / Dashboards",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      contentText: "Design systems",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      contentText: "User experience (UX)",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      contentText: "Landing pages / CMS",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      contentText: "Accessability standards",
    },
  ];

  return (
    <Marquee speed={20}>
      <MarqueeContainer>
        {DevFocusPoints.map((focusPoint) => (
          <MarqueeFocusPoint key={focusPoint.id}>
            {focusPoint.contentText}
          </MarqueeFocusPoint>
        ))}
      </MarqueeContainer>
    </Marquee>
  );
};

export default MarqueeSlider;
