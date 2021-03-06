const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    login: {
      type: String,
      require: true,
      unique: true
    },
    password: {
      type: String,
      require: true
    },
    uploads: [
      {
        type: Schema.Types.ObjectId,
        ref: "upload"
      }
    ]
  },
  {
    timestemps: true
  }
);

schema.set("toJSON", {virtuals: true});

module.exports = mongoose.model("user", schema);
