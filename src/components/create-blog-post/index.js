import React from "react";
import Heading from "./components/Heading";
import Content from "./components/Content";
import Image from "./components/Image";
import styled from "styled-components";
import Button from "../../components/Button";

const StyledButton = styled(Button)`
  background-color: white !important;
  color: red;
  height: 100px;
`;
const Container = styled.form`
  width: 30%;
  top: 75px;
  margin-left: 20px;
  max-height: 300px;
  max-width: 400px;
  background-color: grey;
  border-radius: 5px;
  border: 1px solid white;
  position: fixed;
  justify-content: center ;
  align-items: center;
`;

class index extends React.Component {
  
  render() {
    return (
      <Container className="add-blog-post" onSubmit={this.props.handleFormSubmit}>
        <Heading
          name={"heading"}
          placeholder={"Enter heading"}
          inputType={"text"}
          handleChange={this.props.handleInput}
        />
        <Content
          name={"content"}
          placeholder={"Enter Content"}
          inputType={"text"}
          handleChange={this.props.handleInput}
        />
        <Image
          name={"image"}
          placeholder={"Enter Image URL"}
          inputType={"text"}
          handleChange={this.props.handleInput}
        />
        <StyledButton title="Add Entry"  />
      </Container>
    );
  }
}
export default index;
