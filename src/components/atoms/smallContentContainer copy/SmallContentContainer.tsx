import React, { FC } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";

const SmallContentContainer: FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <div>test</div>
    </>
  );
};

export default SmallContentContainer;
