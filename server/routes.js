// Home
const HOME = '/';

// Board

const BOARD = "/board";
const UPLOAD = "/upload";
const SEARCH = '/search/:searchTerm';
const BOARDLIST = "/list";
const BOARDDETAIL = "/detail/:id";
const BOARDDELETE = "/delete/:id";
const BOARDUPDATE = "/update/:id";
const UPLOADIMAGES = '/board/images';

// USER
const USER = "/user";
const USERJOIN = "/join";
const USERLOGIN = "/login";
const USERLOGOUT = '/logout';
const LOADUSER = '/';

const routes = {
  board: BOARD,
  upload: UPLOAD,
  search: SEARCH,
  boardList: BOARDLIST,
  boardDetail: BOARDDETAIL,
  boardDelete: BOARDDELETE,
  boardUpdate: BOARDUPDATE,
  uploadImages: UPLOADIMAGES,
  user: USER,
  userJoin: USERJOIN,
  userLogin: USERLOGIN,
  userLogout: USERLOGOUT,
  loadUser: LOADUSER,
  home: HOME
};

export default routes;
