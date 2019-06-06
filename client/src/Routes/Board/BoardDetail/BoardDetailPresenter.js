import React from "react";
const BoardDetailPresenter = ({ boardResult }) => (
  <div>
    {console.log(boardResult)}
    {boardResult && (
      <div>
        <p>{boardResult.title}</p>
        <p>{boardResult.description}</p>
        <p>{boardResult.createdAt}</p>
      </div>
    )}
  </div>
);

export default BoardDetailPresenter;
