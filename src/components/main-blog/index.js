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
  left:900px;
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
      <Container className="view-blog-post">
        <Heading
        value={this.props.currentPost}
        />
        <Content
        value={this.props.currentPost}
        />
        <Image
        value={this.props.currentPost}
        />
      </Container>
    );
  }
}
export default index;
