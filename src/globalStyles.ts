import { createGlobalStyle } from "styled-components";

export const brandColors = {
  // Backgrounds (60%)
  primaryColor: "#fff7b3", // soft yellow – playful and light
  secondaryColor: "#fffcfd", // near-white blush – clean and bright

  // Accessible Text + Accent Colors (30% + 10%)
  accentPink: "#ffb3f3", // cotton candy pink – links, buttons
  accentLavender: "#c9b6ff", // pastel lavender – secondary headings, icons
  accentRose: "#ffb3f3", // saturated pink – used sparingly for pop
  accentTextPurple: "#6b4c85", // readable purple for contrast elements
  accentRaspberry: "#cc2e70", // raspberry pink – used for emphasis

  // Primary body text color for accessibility
  textColor: "#3a2f33", // deep plum brown – strong contrast on pastels
};

export const accentColors = {
  // Utility + Neutral Palette
  outline: "#9e79af", // soft lilac-gray – outlines and focus rings
  black: "#1c1c1c", // off-black for strong text
  white: "#ffffff", // pure white

  // Soft neutrals for UI backgrounds or surfaces
  shell: "#fff9fb", // whisper pink – cards and content surfaces
  cloud: "#fefaff", // dreamy off-white – hover or subtle sections

  // Grayscale for borders, dividers, subtle text
  grayscale1: "#fdfdfe", // near-white gray
  grayscale2: "#f2f2f5",
  grayscale3: "#e2e2e8",
  grayscale4: "#cfcfe0",
  grayscale5: "#b2b2c8",
  grayscale6: "#8f8fa3", // muted labels
  grayscale7: "#6b6b80", // secondary text
};

export const rootDimensions = {
  desktopClosedSidebarWidth: "108px",
  mobileClosedSidebarWidth: "78px",
  desktopPaddingTopHeight: "40px",
  mobilePaddingTopHeight: "121px",
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
    --accentLavender: ${brandColors.accentLavender};
    --accentRose: ${brandColors.accentRose};
    --accentTextPurple: ${brandColors.accentTextPurple};
        --accentTextPurple: ${brandColors.accentTextPurple};
    --accentRaspberry: ${brandColors.accentRaspberry};

    /* Utility Colors */
    --textColor: ${brandColors.textColor};
    --outline: ${accentColors.outline};
    --black: ${accentColors.black};
    --white: ${accentColors.white};

    /* Neutrals */
    --sand: ${accentColors.cloud};
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
