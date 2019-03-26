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
    res.redirect("/board");

};

export const getList = async (req, res) => {
    const boards = await Board.find({});
    res.send(boards);
};