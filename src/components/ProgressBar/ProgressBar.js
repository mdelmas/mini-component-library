/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  large: {
    height: "24px",
    "border-radius": "8px",
    padding: "4px",
  },
  medium: {
    height: "12px",
    "border-radius": "4px",
  },
  small: {
    height: "8px",
    "border-radius": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      style={SIZES[size]}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar style={{ "--progress": value + "%" }}></Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  width: 100%;

  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
`;

const BarWrapper = styled.div`
  overflow: clip;
  border-radius: 4px;

  height: 100%;
  width: 100%;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--progress);
  height: 100%;
`;

export default ProgressBar;
