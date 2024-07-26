const express = require('express');
const { connectToDb } = require('./config/db');
const app = express();
const todoRoutes = require('./routes/todoRoutes');
const taskRoutes = require('./routes/tasksRoutes');
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const path = require('path')

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// db connection 
connectToDb();

app.use('/api',todoRoutes);
app.use('/api', taskRoutes);
app.use('/api/v1', userRoutes);


//static files
app.use(express.static(path.join(__dirname,'./Todo-frontend-master/Todo-frontend-master/build')));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./Todo-frontend-master/Todo-frontend-master/build/index"))});

module.exports =  app;