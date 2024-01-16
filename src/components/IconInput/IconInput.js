import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    iconSize: 16,
    iconStrokeWidth: 1,
    general: {
      "--font-size": "14px",
      "--border-width": "1px",
      "--padding": "4px 0 4px 24px",
    },
    icon: {
      "--icon-padding": "8px",
    },
  },
  large: {
    iconSize: 24,
    iconStrokeWidth: 2,
    general: {
      "--font-size": "18px",
      "--border-width": "2px",
      "--padding": "7px 0 7px 36px",
    },
    icon: {
      "--icon-padding": "12px",
    },
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = STYLES[size];
  return (
    <Wrapper label={label} style={{ "--width": width + "px" }}>
      <VisuallyHidden>
        <label for={label}>{label}</label>
      </VisuallyHidden>
      <NativeInput
        type="text"
        name={label}
        id={label}
        placeholder={placeholder}
        style={{ "--width": width + "px", ...style.general }}
      />
      <StyledIcon
        id={icon}
        size={style.iconSize}
        strokeWidth={style.iconStrokeWidth}
        style={style.icon}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const NativeInput = styled.input`
  width: var(--width);
  height: auto;

  border: none;

  padding: var(--padding);

  color: ${COLORS.gray700};
  background-color: transparent;

  font-family: Roboto;
  font-size: var(--font-size);
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  border-bottom: var(--border-width) solid ${COLORS.black};

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  height: fit-content;

  color: ${COLORS.gray700};

  ${NativeInput}:hover + & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
