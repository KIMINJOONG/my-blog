import mongoose from "mongoose";

const Image = new mongoose.Schema({
  src: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
    },
});

const model = mongoose.model("Image", BoardSchema);
export default model;
