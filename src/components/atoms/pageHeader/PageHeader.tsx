import React, { FC } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { HeaderContainer, HeaderText, SubheaderText } from "./pageHeaderStyle";

type PageHeaderProps = {
  headerText: string;
  subheaderText?: string;
};

const PageHeader: FC<PageHeaderProps> = ({ headerText, subheaderText }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <HeaderContainer>
      <HeaderText>{headerText}</HeaderText>
      {subheaderText && !isMobile && (
        <SubheaderText>{subheaderText}</SubheaderText>
      )}
    </HeaderContainer>
  );
};

export default PageHeader;
