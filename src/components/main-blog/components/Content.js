import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  width: 50px;
  padding: 10px 10px 10px 10px;
`;
const StyledTextArea = styled.div`
  max-height: 200px;
  max-width: 175px;
  min-width: 175px;
  min-height: 50px;
`;

const Content = (props) => (
  <StyledContent>
    <StyledTextArea
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}
      type={props.inputType}
      value={props.value}
      onChange={props.handleChange}>
      {props.value}
      </StyledTextArea>
  </StyledContent>
);

export default Content;
