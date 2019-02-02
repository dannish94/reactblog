import React from "react";
import List from "./components/List";
import styled from "styled-components";

const Container = styled.form`
  width: 30%;
  top: 70px;
  margin-left: 500px;
  max-height: 300px;
  max-width: 400px;
  background-color: grey;
  border-radius: 5px;
  border: 1px solid white;
  position: fixed;
  justify-content: center;
  align-items: center;
`;

class index extends React.Component {

    handleClick = (key) => {
        this.props.handleViewPost(key);
    } 

  render() {
    return (
      <Container>
        <ul className="entry">
          {Object.keys(this.props.postValue).map(key => 
            <List 
            key={key}
            index={key} 
            details={this.props.postValue[key]} 
            handleViewPost={this.handleClick} 
            />
          )}
        </ul>
      </Container>
    );
  }
}

export default index;
