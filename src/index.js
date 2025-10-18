import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/db.js";
import { application } from "express";
import { app } from "./app.js";
dotenv.config({ path: './.env' });


/*  1st approach to connect DB 
import express from "express";
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", () => {
            console.log("Database is connected , but express app is not working");
            throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log(`App is listing on ${process.env.PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
})();

*/


// 2nd approach to connect DB , best way:
connectDB().then(
    app.listen(process.env.PORT, () => {
        console.log(`Server is running at port number ${process.env.PORT}`);
    })
).catch((error) => {
    console.log("Mongo db connection failed!!!.", error);

});
// whenever a async method complete hota hain . it return a promise
