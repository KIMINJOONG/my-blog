import User from "../models/User";
import { savePassword, comparePassword } from "../utils/password";

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
  res.status(200).json(isLogin);
};
