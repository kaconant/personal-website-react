import React, { FC } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { HeaderContainer } from "./pageHeaderStyle";
import { H0, H1 } from "../../textElements";

type PageHeaderProps = {
  headerText: string;
  subheaderText?: string;
};

const PageHeader: FC<PageHeaderProps> = ({ headerText, subheaderText }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <HeaderContainer>
      <H0>{headerText}</H0>
      {subheaderText && <H1>{subheaderText}</H1>}
    </HeaderContainer>
  );
};

export default PageHeader;
