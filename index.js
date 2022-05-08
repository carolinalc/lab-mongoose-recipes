const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
   .connect(MONGODB_URI)
   .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
   
    return Recipe.deleteMany()
  })

  .then((result) => {

    return Recipe.insertMany(data)

  })
  .then((result) => {
   
   return Recipe.findOneAndUpdate({ title: "Rigatoni alla Genovese" }, { duration: 100 }, { new:true })
      console.log(result)
  })
  .then((result) => {
  
    return Recipe.findOneAndDelete({ title: "Carrot Cake" })
   })
   .catch((error) => {
    console.error(error);
  })
 

