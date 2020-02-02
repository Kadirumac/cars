const mongoose = require("mongoose");

const CarSchema = mongoose.Schema({


  brand:String
//   model:String,
//   modelYear: String,
//   autoShape:String,
//   color: String,
 
});

module.exports = mongoose.model("cars", CarSchema);

