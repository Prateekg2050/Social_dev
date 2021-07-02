const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log("Database Connected...");
}); 

//middlewares
app.use(express.json()); // Body parser
app.use(helmet());
app.use(morgan("common"));


// Routes
const userRoutes = require('./routes/userRoutes');
userRoutes(app);

const authRoutes = require('./routes/authRoutes');
authRoutes(app);


const PORT = 5000;
app.listen(PORT,()=>{
    console.log("Server is running..")
});