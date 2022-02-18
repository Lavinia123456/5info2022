const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Lavinia:lavinialuiz9979@cluster0.m4sum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
/*colocar link do mongodb aqui acima*/

module.exports = mongoose;
