import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
  text-align: center;
`;

const Boards = ({ title }) => (
  <Link to="http://localhost:3000">
    <Container>
      <ImageContainer>
        <Image bgUrl={require("../assets/noPosterSmall.png")} />
      </ImageContainer>
      <Title>{title}</Title>
    </Container>
  </Link>
);

export default Boards;
