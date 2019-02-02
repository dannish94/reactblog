import React from "react";
import styled from "styled-components";

const StyledHeading = styled.div`
  width: 50px;
  padding: 10px 10px 10px 10px;
`;

const Heading = (props) => (
  <StyledHeading>
    {props.value.heading}
  </StyledHeading>
);

export default Heading;
