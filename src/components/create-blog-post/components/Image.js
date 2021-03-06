import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
  width: 50px;
  padding: 0 10px 10px 10px;
`;
const StyledInput = styled.input`
  max-height: 200px;
  max-width: 250px;
  min-width: 150px;
  min-height: 50px;
`;

const Image = (props) => (
  <StyledImage>
    <StyledInput
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
