import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
const Button = styled.button``;
const UserLoginPresenter = ({ onChangeInput, onSubmitForm }) => (
  <Container>
    <Form onSubmit={onSubmitForm}>
      <Input name="id" onChange={onChangeInput} />
      <Input type="password" name="password" onChange={onChangeInput} />
      <Button>로그인</Button>
    </Form>
  </Container>
);

export default UserLoginPresenter;
