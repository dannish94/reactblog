import React from "react";
import styled from 'styled-components'

const StyledTitle = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: grey;
    position: fixed;
    top: 0;
    left: 0;
`

const Title = () => (
    <StyledTitle>
        <h1>Blog Title</h1>    
    </StyledTitle>
)

export default Title