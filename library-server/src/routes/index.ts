import {Express, Request, Response} from 'express';
import router from "./AuthRoutes" ;

export function registerRoutes(app:Express) {

    app.get("/health", (req:Request, res:Response)=> {
        res.status(200).json({message: "Server is running properly"});
    })
    
    app.use("/auth", router);
}