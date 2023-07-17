import React, { FC } from "react";
import { HeaderContainer, HeaderText, SubheaderText } from "./pageHeaderStyle";

type PageHeaderProps = {
  headerText: string;
  subheaderText?: string;
};

const PageHeader: FC<PageHeaderProps> = ({ headerText, subheaderText }) => {
  return (
    <HeaderContainer>
      <HeaderText>{headerText}</HeaderText>
      {subheaderText && <SubheaderText>{subheaderText}</SubheaderText>}
    </HeaderContainer>
  );
};

export default PageHeader;
