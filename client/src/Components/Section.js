import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`

`;


const Section = ({children}) => (
    <Container>
        {children}
    </Container>
)

export default Section;
