import Board from "../models/Board";

export const postUpload = async (req, res) => {
    const {
        body : {
            title,
            description
        }
    } = req;
    
    await Board.create({
        title,
        description
    });

};

export const getList = async (req, res) => {
    console.log("리스트 들어옴");
    const boards = await Board.find({});
    res.send(boards);
};