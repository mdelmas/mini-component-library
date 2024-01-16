import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper label={label} tabIndex={0}>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      {displayedValue}
      <Icon id="chevron-down" size={18} strokeWidth={3} />
    </Wrapper>
  );
};

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  opacity: 0;
`;

const Wrapper = styled.div`
  position: relative;

  display: flex;
  gap: 24px;

  width: fit-content;
  height: fit-content;

  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};

  border: none;
  border-radius: 8px;

  font-size: ${16 / 16}rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding: 12px 24px 12px 16px;

  &:hover {
    color: black;
  }

  ${NativeSelect} & {
    color: red;
  }
`;

export default Select;
