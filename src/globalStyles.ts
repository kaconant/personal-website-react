import { createGlobalStyle } from "styled-components";

export const brandColors = {
  // Backgrounds (60%)
  primaryColor: "#e6f9f8", // light mint green – primary background
  secondaryColor: "#fff4f6", // blush pink – secondary background

  // Accessible Text + Accent Colors (30% + 10%)
  accentPink: "#f7c5cc", // warm blush – buttons, links
  accentGreen: "#7cb0a4", // turquoise green – borders, icons, focus ring
  accentMauve: "#a07f8d", // dusty mauve – subheadings, cards
  accentLightMauve: "#e2d5d8", // soft mauve – lighter UI elements
  accentPurple: "#c2b2e7", // lavender – soft accents
  accentDarkPurple: "#7a6999", // deep lavender – headings, CTA buttons
  accentRose: "#db7697", // bold rose – use sparingly for pop

  // Primary body text color for accessibility
  textColor: "#403b3d", // rich neutral – readable on pastels
};

export const accentColors = {
  // Utility + Neutral Palette
  outline: "#6F6B85", // muted purple-gray – outline/focus
  black: "#111827", // rich black
  white: "#FFFFFF", // base white

  // Soft neutrals for UI backgrounds or surfaces
  sand: "#F4DECB", // warm sand – section background
  shell: "#f7f2ef", // off-white – card or content surface

  // Grayscale for borders, dividers, subtle text
  grayscale1: "#F9FAFB", // very light gray
  grayscale2: "#F3F4F6",
  grayscale3: "#E5E7EB",
  grayscale4: "#D1D5DB",
  grayscale5: "#9CA3AF",
  grayscale6: "#6B7280", // muted label text
  grayscale7: "#4B5563", // secondary text
};

export const rootDimensions = {
  desktopClosedSidebarWidth: "108px",
  mobileClosedSidebarWidth: "78px",
  desktopPaddingTopHeight: "40px",
  mobilePaddingTopHeight: "100px",
  midZIndex: 5,
  topZIndex: 10,
  standardBorderRadius: "6px",
};

const GlobalStyle = createGlobalStyle`

  :root {
      /* Brand Colors */
    --primaryColor: ${brandColors.primaryColor}; /* Background */
    --secondaryColor: ${brandColors.secondaryColor}; /* Secondary Background */

    /* Accents */
    --accentPink: ${brandColors.accentPink};
    --accentGreen: ${brandColors.accentGreen};
    --accentMauve: ${brandColors.accentMauve};
    --accentLightMauve: ${brandColors.accentLightMauve};
    --accentPurple: ${brandColors.accentPurple};
    --accentDarkPurple: ${brandColors.accentDarkPurple};
    --accentRose: ${brandColors.accentRose};

    /* Utility Colors */
    --textColor: ${brandColors.textColor};
    --outline: ${accentColors.outline};
    --black: ${accentColors.black};
    --white: ${accentColors.white};

    /* Neutrals */
    --sand: ${accentColors.sand};
    --shell: ${accentColors.shell};

    /* Grayscale */
    --grayscale1: ${accentColors.grayscale1};
    --grayscale2: ${accentColors.grayscale2};
    --grayscale3: ${accentColors.grayscale3};
    --grayscale4: ${accentColors.grayscale4};
    --grayscale5: ${accentColors.grayscale5};
    --grayscale6: ${accentColors.grayscale6};
    --grayscale7: ${accentColors.grayscale7};

    /* size */
    --desktopClosedSidebarWidth: ${rootDimensions.desktopClosedSidebarWidth};
    --mobileClosedSidebarWidth: ${rootDimensions.mobileClosedSidebarWidth};
    --desktopPaddingTopHeight: ${rootDimensions.desktopPaddingTopHeight};
    --mobilePaddingTopHeight: ${rootDimensions.mobilePaddingTopHeight};

    /* z-index */
    --midZIndex: ${rootDimensions.midZIndex};
    --topZIndex: ${rootDimensions.topZIndex};

    /* border radius */
    --standardBorderRadius: ${rootDimensions.standardBorderRadius};
  }

  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
