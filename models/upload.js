const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
    {
      post:{
        type: Schema.Types.ObjectId,
        ref: "post"
      },
      owner:{
        type: Schema.Types.ObjectId,
        ref:"user"
      },
      path:{
        type: String,
        required: true
      }
    },
    {
      timestemps: true
    }
  );

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("upload", schema);