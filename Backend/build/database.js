"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var url = "mongodb+srv://AlexRGB:4J72AZAzCxnnZJE@cluster0.hm1sfft.mongodb.net/?retryWrites=true&w=majority";
var connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

//Coneccion CLOUD DATABASE
_mongoose["default"].connect(url, connectionParams).then(function () {
  console.log("DB Connect");
})["catch"](function (err) {
  console.error("Error connecting to the database. n".concat(err));
});

//Descomentar para coneccion local
// mongoose
//   .connect("mongodb://localhost/pokedexDb")
//   .then((db) => console.log("DB is connect"))
//   .catch((error) => console.log(error));