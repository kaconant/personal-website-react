import styled from "styled-components";
import { H3 } from "../../Typography";

type MarqueeSliderProps = {
  isNarrow?: boolean;
};

export const MarqueeContainer = styled.div<MarqueeSliderProps>`
  display: flex;
  gap: 32px;
  cursor: pointer;
`;

export const MarqueeFocusPoint = styled(H3)`
  &:last-child {
    margin-right: 36px;
  }
`;
