import React from "react";
//import Proptypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;

const Section = ({ children, listFormCode }) =>
  listFormCode === 1 ? (
    <Container>
      <Grid>{children}</Grid>
    </Container>
  ) : (
    <Container>{children}</Container>
  );

export default Section;
