import React from "react"
import Heading from "./components/Heading";
import Content from "./components/Content";
import Image from "./components/Image";
import styled from 'styled-components'
import Button from '../../components/Button'


const StyledButton = styled(Button)`
  background-color: white!important;
  color: red;
  height: 100px;

`

const Container = styled.div`
    width:30%;
    bottom:100px;
    margin-left: 20px;
    background-color:grey;
    border-radius: 5px;
    border: 1px solid white; 
    position:fixed;
    justify-content: center;
    align-items: center;



`

const AddBlog = () => (
  <Container>
    <Heading />
    <Content />
    <Image />
    <StyledButton title="Add Entry"/>

  </Container>
);

export default AddBlog