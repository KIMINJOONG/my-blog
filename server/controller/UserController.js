import User from "../models/User";
import { savePassword } from "../utils/password";

export const postJoin = async (req, res) => {
  const {
    body: {
      data: { id, password }
    }
  } = req;
  const hashedPassword = savePassword(password);
  console.log("해쉬 :", hashedPassword);
  //await User.create({
  //  id,
  //  password: hashedPassword
  //});
  res.status(200).json("success");
};
