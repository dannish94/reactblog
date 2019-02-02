import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
  width: 50px;
  padding: 10px 10px 10px 10px;
`;

const Image = (props) => (
  <StyledImage>
     {props.value.image}
  </StyledImage>
);

export default Image;
