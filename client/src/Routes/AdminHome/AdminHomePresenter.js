import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import cookies from "react-cookies";

const Container = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
const Button = styled.button``;
const SLink = styled(Link)``;
const AdminHomePresenter = ({ onChangeInput, onSubmitForm, isLogin }) => (
  <Container>
    {
      !isLogin && !cookies.load("token") ? (
        <>
          <Form onSubmit={onSubmitForm}>
            <Input name="id" onChange={onChangeInput} />
            <Input type="password" name="password" onChange={onChangeInput} />
            <Button>로그인</Button>
          </Form>
          <SLink to="/admin/join">회원가입</SLink>
        </>
      ) : (
        <SLink to="/admin/logout">로그아웃</SLink>
      )
    }
    
  </Container>
);

export default AdminHomePresenter;
