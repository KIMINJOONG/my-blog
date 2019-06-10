import React from "react";
import { Link } from "react-router-dom";

const Boards = ({ title, createdAt, id }) => (
  <>
    <Link to={`board/detail/${id}`} />
    <span>{title}</span>
    <span>{createdAt}</span>
  </>
);

export default Boards;
