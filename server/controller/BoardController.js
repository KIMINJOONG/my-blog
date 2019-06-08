import Board from "../models/Board";

export const postUpload = async (req, res) => {
  const {
    body: {
      data: { title, description }
    }
  } = req;
  await Board.create({
    title,
    description
  });
  res.redirect("/board");
};

export const getList = async (req, res) => {
  const boards = await Board.find({});
  res.send(boards);
};

export const getDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  const boardDetail = await Board.findById(id);
  res.status(200).json(boardDetail);
};

export const boardDelete = async (req, res) => {
  const {
    params: { id }
  } = req;
  await Board.findOneAndRemove({ _id: id });
  res.status(200).json("success");
};

export const boardUpdate = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  await Board.findOneAndUpdate({ _id: id }, { title, description });
};
