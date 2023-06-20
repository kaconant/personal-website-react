import { createGlobalStyle } from "styled-components";

export const brandColors = {
  lightBlue: "#cfe7f7",
  midBlue: "#B1C3EF",
  midAqua: "#7DC4D2",
  lightPink: "#f9e0f9",
  midPink: "#F2BFD7",
  lightPurple: "#ebe5f9",
  midPurple: "#AA9CD5",
  darkPurple: "#614051",
  lightOrange: "#FED6C2",
  midOrange: "#F3B48F"
};

export const accentColors = {
  outline: "#6F6B85",
  black: "#111827",
  white: "#FFFFFF",
  sand: "#F4DECB",
  shell: "#f7f2ef",
  grayscale1: "#F9FAFB",
  grayscale2: "#F3F4F6",
  grayscale3: "#E5E7EB",
  grayscale4: "#D1D5DB",
  grayscale5: "#9CA3AF",
  grayscale6: "#6B7280",
  grayscale7: "#4B5563",
};

export const rootDimensions = {
  desktopClosedSidebarWidth: "108px",
  mobileClosedSidebarWidth: "78px",
  desktopPaddingTopHeight: "40px",
  mobilePaddingTopHeight: "100px",
  midZIndex: 5,
  topZIndex: 10
};

const GlobalStyle = createGlobalStyle`

  :root {
    --lightBlue: ${brandColors.lightBlue};
    --midBlue: ${brandColors.midBlue};
    --midAqua: ${brandColors.midAqua};
    --lightPink: ${brandColors.lightPink};
    --midPink: ${brandColors.midPink};
    --lightPurple: ${brandColors.lightPurple};
    --midPurple: ${brandColors.midPurple};
    --darkPurple: ${brandColors.darkPurple};
    --lightOrange: ${brandColors.lightOrange};
    --midOrange: ${brandColors.midOrange};

    --outline: ${accentColors.outline};
    --black: ${accentColors.black};
    --white: ${accentColors.white};
    --sand: ${accentColors.sand};
    --shell: ${accentColors.shell};
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
