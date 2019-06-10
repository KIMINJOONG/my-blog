import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: String,
  category: Number,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const model = mongoose.model("Board", BoardSchema);
export default model;
