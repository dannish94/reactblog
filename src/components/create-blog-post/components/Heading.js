import React from "react";
import styled from "styled-components";

const StyledHeading = styled.div`
  width: 50px;
  padding: 10px 10px 10px 10px;
`;

const Heading = (props) => (
  <StyledHeading>
    <input
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
