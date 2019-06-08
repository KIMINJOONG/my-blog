import React from "react";
const BoardDetailPresenter = ({ boardResult, deleteFn }) => (
  <div>
    {boardResult && (
      <div>
        <p>{boardResult.title}</p>
        <p>{boardResult.description}</p>
        <p>{boardResult.createdAt}</p>
        <button onClick={deleteFn}>삭제</button>
      </div>
    )}
  </div>
);

export default BoardDetailPresenter;
