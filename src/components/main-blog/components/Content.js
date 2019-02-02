import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  width: 50px;
  padding: 10px 10px 10px 10px;
`;


const Content = (props) => (
  <StyledContent>
    {props.value.content}
  </StyledContent>
);

export default Content;
