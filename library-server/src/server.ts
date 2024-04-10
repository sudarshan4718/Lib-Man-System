import express, {Express, Request, Response} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {config} from './config';
import {registerRoutes} from './routes/index';


const PORT = config.server.port;

const app:Express = express();

app.use(express.json());
app.use(cors());

(async function startUp(){
    try {
        await mongoose.connect(process.env.DB_URI! ,{ dbName: process.env.DB_NAME })

        console.log("Connection to Mongo db is successfully made");

       registerRoutes(app);
        
        app.listen(PORT, () =>{
            console.log(`Server is runnning on PORT : ${PORT}`);
        })

    } catch (error) {
        console.log("Couldnt make a connection to mongodb");
        
    }

})()


