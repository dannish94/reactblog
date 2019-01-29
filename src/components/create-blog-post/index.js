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
  bottom: 100px;
  margin-left: 20px;
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
  constructor(props) {
    super(props);

    this.state = {
      newPost: {
        heading: "",
        content: "",
        image: ""
      }
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleInput = this.handleInput.bind(this);
  }
  //  handleInput(e) {
  //     let value = e.target.value;
  //     let name = e.target.name;
  //     this.setState(
  //       prevState => ({
  //         newUser: {
  //           ...prevState.newUser,
  //           [name]: value
  //         }
  //       }),
  //       () => console.log(this.state.newUser)
  //     );
  //   }
  handleFormSubmit(e) {
    e.preventDefault();
    let blogData = this.state.newPost;
  }

  handleInput = e => {
    e.preventDefault();
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newPost: {
          ...prevState.newPost,
          [name]: value
        }
      }),
      () => console.log(this.state.newPost)
    );
  };

  render() {
    return (
      <Container className="add-blog-post" onSubmit={this.handleFormSubmit}>
        <Heading
          name={"heading"}
          placeholder={"Enter heading"}
          inputType={"text"}
          value={this.state.newPost.heading}
          handleChange={this.handleInput}
        />
        <Content
          name={"content"}
          placeholder={"Enter Content"}
          inputType={"text"}
          value={this.state.newPost.content}
          handleChange={this.handleInput}
        />
        <Image
          name={"image"}
          placeholder={"Enter Image URL"}
          inputType={"text"}
          value={this.state.newPost.image}
          handleChange={this.handleInput}
        />
        <StyledButton title="Add Entry" />
      </Container>
    );
  }
}
export default index;
