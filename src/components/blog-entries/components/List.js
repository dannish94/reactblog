import React from "react";
import styled from "styled-components";

const StyledHeading = styled.div`
  width: 50px;
`;

class List extends React.Component {

  render() {
    return (
    <StyledHeading className="list">
      <li className="list-item">
          <div className="item-heading" onClick={() => this.props.handleViewPost(this.props.index)}>
         {this.props.details.heading}
          </div>
      </li>
    </StyledHeading>
);
  }
}

export default List;