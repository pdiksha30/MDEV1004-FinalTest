/*
Filename : app.ts, 
Student’s Name : Diksha Patel,
StudentID : 200540067, 
Date : 6/23/23 
*/
// modules for express server
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// Database modules
import mongoose from 'mongoose';
import db from './db';

mongoose.connect(db.remoteURI);

// DB Connection Events
mongoose.connection.on('connected', () =>{
    console.log(`Connected to MongoDB`);
});

mongoose.connection.on('disconnected', () =>{
    console.log('Disconnected from MongoDB');
});



let app = express();

// middleware modules
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


export default app;
