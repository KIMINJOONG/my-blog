import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Boards = ({ title, createdAt, id }) => (
  <>
    <Link to={`board/detail/${id}`} />
    <span>{title}</span>
    <span>{createdAt}</span>
  </>
);

export default Boards;
