import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
    width:100px;
    bottom:100px;
    background-color:grey;
    border-radius:6px;
    border:1px white;
    position:fixed;
    justify-content: center;
    align-items: center;

`
const Button = (props) => (
        <StyledButton>
           {props.title}
        </StyledButton>
)

export default Button;