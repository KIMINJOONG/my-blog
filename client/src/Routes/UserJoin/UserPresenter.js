import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
const Button = styled.button``;

const UserPresenter = ({ onChangeInput, onSubmitForm }) => (
  <Container>
    <Form onSubmit={onSubmitForm}>
      <Input name="id" onChange={onChangeInput} />
      <Input name="password" onChange={onChangeInput} />
      <Button>가입</Button>
    </Form>
  </Container>
);

export default UserPresenter;
