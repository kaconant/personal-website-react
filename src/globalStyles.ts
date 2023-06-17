import { createGlobalStyle } from "styled-components";

export const brandColors = {
  lightBlue: "#B6D9F2",
  midBlue: "#B1C3EF",
  midAqua: "#7DC4D2",
  lightPink: "#FED6F6",
  midPink: "#F2BFD7",
  midPurple: "#7C73D3",
  lightOrange: "#FED6C2",
  midOrange: "#F3B48F"
};

export const accentColors = {
  outline: "#6F6B85",
  black: "#111827",
  white: "#FFFFFF",
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
    --midPurple: ${brandColors.midPurple};
    --lightOrange: ${brandColors.lightOrange};
    --midOrange: ${brandColors.midOrange};

    --outline: ${accentColors.outline};
    --black: ${accentColors.black};
    --white: ${accentColors.white};
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
    font-family: "Lato", monospace;
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
