import React from "react";
import styled from "styled-components";

const StyledHeading = styled.div`
  width: 50px;
  padding: 10px 10px 10px 10px;
`;
const StyledInput = styled.input`
  max-height: 25px;
  max-width: 250px;
  min-width: 150px;
  min-height: 25px;
`;

const Heading = (props) => (
  <StyledHeading>
    <StyledInput
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}
      type={props.inputType}
      value={props.value}
      onChange={props.handleChange}
    />
  </StyledHeading>
);

export default Heading;
