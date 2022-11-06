import mongoose from "mongoose";

const url = `mongodb+srv://AlexRGB:4J72AZAzCxnnZJE@cluster0.hm1sfft.mongodb.net/?retryWrites=true&w=majority`;
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//Coneccion CLOUD DATABASE
// mongoose
//   .connect(url, connectionParams)
//   .then(() => {
//     console.log("DB Connect");
//   })
//   .catch((err) => {
//     console.error(`Error connecting to the database. n${err}`);
//   });

//Descomentar para coneccion local
mongoose
  .connect("mongodb://localhost/pokedexDb")
  .then((db) => console.log("DB is connect"))
  .catch((error) => console.log(error));
