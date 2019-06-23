import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
const Button = styled.button``;
const SLink = styled(Link)``;
const AdminHomePresenter = ({ onChangeInput, onSubmitForm, me }) => (
  <Container>
    {
      !me ? (
        <>
          <Form onSubmit={onSubmitForm}>
            <Input name="id" onChange={onChangeInput} />
            <Input type="password" name="password" onChange={onChangeInput} />
            <Button>로그인</Button>
          </Form>
          <SLink to="/admin/join">회원가입</SLink>
        </>
      ) : (
        <div>
          <span>{ me.id }님 환영합니다.</span>
          <SLink to="/admin/logout">로그아웃</SLink>
        </div>
        
      )
    }
    
  </Container>
);

export default AdminHomePresenter;
