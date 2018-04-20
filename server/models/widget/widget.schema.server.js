var mongoose = require("mongoose");

var WidgetSchema = mongoose.Schema ({
  _course: {type: mongoose.Schema.Types.ObjectId, ref: "CourseModel"},
  type: {type: String, enum: ['HEADER', 'IMAGE', 'YOUTUBE', 'HTML']} ,
  text: String,
  url: String,
  size: Number,
  position: Number,    // for reorder use
  dateCreated: {type: Date, default: Date.now}
}, {collection: "widget" });

module.exports = WidgetSchema;
