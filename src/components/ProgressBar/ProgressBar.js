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
    <ProgressBarWrapper style={SIZES[size]}>
      <ProgressIndicatorWrapper>
        <ProgressIndicator
          style={{ "--progress": value + "%" }}
        ></ProgressIndicator>
      </ProgressIndicatorWrapper>
    </ProgressBarWrapper>
  );
};

const ProgressBarWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  width: 100%;

  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
`;
/* min-width: 300px;
  width: 100%; */

const ProgressIndicatorWrapper = styled.div`
  overflow: clip;
  border-radius: 4px;

  height: 100%;
  width: 100%;
`;

const ProgressIndicator = styled.div`
  background-color: ${COLORS.primary};
  width: var(--progress);
  height: 100%;
`;

export default ProgressBar;
