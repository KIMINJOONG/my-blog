// Board

const BOARD = "/board";
const UPLOAD = "/upload";
const BOARDLIST = "/list";
const BOARDDETAIL = "/detail/:id";
const BOARDDELETE = "/delete/:id";
const BOARDUPDATE = "/update/:id";

const routes = {
  board: BOARD,
  upload: UPLOAD,
  boardList: BOARDLIST,
  boardDetail: BOARDDETAIL,
  boardDelete: BOARDDELETE,
  boardUpdate: BOARDUPDATE
};

export default routes;
