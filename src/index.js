// import express from "express";
// const bodyParser = require('body-parser')
// import mongoose from "mongoose";
// const app = express();
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const CarsRoutes = require('../express/routes/cars')


// const express = require('express')

// const mongoose = require('mongoose')
// const TicketRoutes = require('./express/routes/tickets')

mongoose.connect("mongodb+srv://admin:admin@cluster0-bdhvc.mongodb.net/test?retryWrites=true&w=majority")

mongoose.set("debug", true);
mongoose.Promise = global.Promise;

const port = process.env.PORT || 4001
const app = express()
// mongoose.set("debug", true);
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/checkpoint2");
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static('client/build'))
// }

// app.use(bodyParser.json())
app.use('/cars', CarsRoutes)

// app.get('/', (req, res) => res.send('Default route!'))

app.listen(port, () => {
  console.log(`Express app running on localhost:${port}`)
})

// const port = process.env.PORT || 3001;
// app.listen(port, () => {
//   console.log(`Listening on port:${port}`);
// });
