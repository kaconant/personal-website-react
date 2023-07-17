import styled from "styled-components/macro";
import { H4 } from "../../textElements";

type MarqueeSliderProps = {
  isMobile?: boolean;
};

export const MarqueeContainer = styled.div<MarqueeSliderProps>`
  display: flex;
  gap: 32px;
`;

export const MarqueeFocusPoint = styled(H4)`
  &:last-child {
    margin-right: 36px;
  }
`;
