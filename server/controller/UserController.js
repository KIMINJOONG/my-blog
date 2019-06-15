import User from "../models/User";
import { savePassword, comparePassword } from "../utils/password";
import createJWT from "../utils/createJWT";

export const postJoin = async (req, res) => {
  const {
    body: {
      data: { id, password }
    }
  } = req;
  const hashedPassword = await savePassword(password);
  await User.create({
    id,
    password: hashedPassword
  });
  res.status(200).json("success");
};

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
    return res.status(200).json({ token, ok: true, error: null });
  } else {
    return res.status(200).json({
      token: null,
      ok: false,
      error: "패스워드를 잘못입력하셨습니다."
    });
  }
};
