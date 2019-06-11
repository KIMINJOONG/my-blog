// Board

const BOARD = "/board";
const UPLOAD = "/upload";
const BOARDLIST = "/list";
const BOARDDETAIL = "/detail/:id";
const BOARDDELETE = "/delete/:id";
const BOARDUPDATE = "/update/:id";

const USER = "/user";
const USERJOIN = "/join";
const USERLOGIN = "/login";

const routes = {
  board: BOARD,
  upload: UPLOAD,
  boardList: BOARDLIST,
  boardDetail: BOARDDETAIL,
  boardDelete: BOARDDELETE,
  boardUpdate: BOARDUPDATE,
  user: USER,
  userJoin: USERJOIN,
  userLogin: USERLOGIN
};

export default routes;
