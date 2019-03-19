import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: String
});

const model = mongoose.model("Board", BoardSchema);
export default model;