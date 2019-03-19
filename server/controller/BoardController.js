import Board from "../models/Board";

export const postUpload = async (req, res) => {
    console.log("들어옴");
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

    console.log("성공");
};