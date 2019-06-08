import React from "react";
const BoardDetailPresenter = ({
  boardResult,
  deleteFn,
  loadUpdateForm,
  isUpdateForm,
  cancelUpdateForm,
  onChangeInput,
  title,
  description,
  updateFn
}) => (
  <div>
    {isUpdateForm ? (
      <form onSubmit={updateFn}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChangeInput}
        />
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={onChangeInput}
        />
        <button onClick={updateFn}>수정</button>
        <button onClick={cancelUpdateForm}>취소</button>
      </form>
    ) : (
      boardResult && (
        <div>
          <p>{boardResult.title}</p>
          <p>{boardResult.description}</p>
          <p>{boardResult.createdAt}</p>
          <button onClick={loadUpdateForm}>수정</button>
          <button onClick={deleteFn}>삭제</button>
        </div>
      )
    )}
  </div>
);

export default BoardDetailPresenter;
