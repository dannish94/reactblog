import React from "react";
import styled from "styled-components";

const StyledHeading = styled.div`
  width: 50px;
  padding: 10px 10px 10px 10px;
`;

const List = (props) => (
    <StyledHeading className="list">
      <li className="list-item">
          <h3 className="item-heading">
              {props.details.heading}
          </h3>
      </li>
    </StyledHeading>
)

export default List;