import Board from "../models/Board";




export const postUpload = async (req, res) => {
  const {
    body: {
      title,
      description
    }
  } = req;
  await Board.create({
    title,
    description
  });
  res.status(200).json("success");
};

export const searchBoard = async (req, res) => {
  const {
    params: {searchTerm}
  } = req;
  console.log('searchTerm : ',searchTerm);
  const boards = await Board.find({ title : searchTerm});
  res.status(200).json(boards);
}

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
  res.status(200).json("success");
};


export const uploadImages = async (req, res) => {
  console.log(req.files);
  res.json(req.files.map(v => v.filename));
}
