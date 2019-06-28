import React from "react";
import Loader from "../../Components/Loader";
const BoardDetailPresenter = ({
  boardResult,
  deleteFn,
  loadUpdateForm,
  isUpdateForm,
  cancelUpdateForm,
  onChangeInput,
  title,
  description,
  updateFn,
  loading,
  me
}) => (
  <div>
    {loading ? (
      <Loader />
    ) : isUpdateForm ? (
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
          {
            boardResult.images && 
            boardResult.images.map((image, index) => (
              <img key={index} src={`http://localhost:4000/${image.src}`} width="100px" alt={image.src} />
            ))
          }
          {
            me && (
              <div>
                <button onClick={loadUpdateForm}>수정</button>
                <button onClick={deleteFn}>삭제</button>
              </div>
              )
          }
          
        </div>
      )
    )}
  </div>
);

export default BoardDetailPresenter;
