import User from "../models/User";
import { savePassword, comparePassword } from "../utils/password";
import createJWT from "../utils/createJWT";

export const postJoin = async (req, res) => {
  const {
    body: {
      data: { id, password }
    }
  } = req;
  const user = await User.findOne({id});
  if(user) {
    return res.status(401).send("이미 존재하는 아이디입니다.");
  }
  const hashedPassword = await savePassword(password);
  await User.create({
    id,
    password: hashedPassword
  });
  return res.status(200).json({ok : true});
};

export const postLogout = (req, res) => {
  console.log("req", req);
  res.clearCookie("token")
  res.send("로그아웃 성공");
}

export const postLogin = async (req, res) => {
  const {
    body: {
      data: { id, password }
    }
  } = req;
  const user = await User.findOne({ id });
  const isLogin = await comparePassword(password, user.password);
  if (isLogin) {
    const token = createJWT(user.id);
    res.cookie("token", token);
    req.user = user;
    const filteredUser = Object.assign({}, user.toJSON());
    delete filteredUser.password;
    return res.status(200).json({filteredUser});
  } else {
    return res.status(401).json({
      token: null,
      ok: false,
      error: "패스워드를 잘못입력하셨습니다."
    });
  }
};
