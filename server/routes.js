// Home
const HOME = '/';

// Board

const BOARD = "/board";
const UPLOAD = "/upload";
const BOARDLIST = "/list";
const BOARDDETAIL = "/detail/:id";
const BOARDDELETE = "/delete/:id";
const BOARDUPDATE = "/update/:id";

// USER
const USER = "/user";
const USERJOIN = "/join";
const USERLOGIN = "/login";
const USERLOGOUT = '/logout';
const LOADUSER = '/';

const routes = {
  board: BOARD,
  upload: UPLOAD,
  boardList: BOARDLIST,
  boardDetail: BOARDDETAIL,
  boardDelete: BOARDDELETE,
  boardUpdate: BOARDUPDATE,
  user: USER,
  userJoin: USERJOIN,
  userLogin: USERLOGIN,
  userLogout: USERLOGOUT,
  loadUser: LOADUSER,
  home: HOME
};

export default routes;
