const mongoose = require("mongoose");
const URLSlugs = require("mongoose-url-slugs");
const tr = require("transliter");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

schema.plugin(
  URLSlugs("title", {
    field:'url',
    generator: text => tr.slugify(text)
  })
);



schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("post", schema);