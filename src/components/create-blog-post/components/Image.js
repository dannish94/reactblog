import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
  width: 50px;
  padding: 0 10px 10px 10px;
`;

const Image = (props) => (
  <StyledImage>
    <input
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}
      type={props.inputType}
      value={props.value}
      onChange={props.handleChange}
    />
  </StyledImage>
);

export default Image;
