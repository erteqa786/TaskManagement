import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import dbConnection from "./utils/index.js";
import { errorHandler, routeNotFound } from "./middlewares/errorMiddleware.js";
import routes from "./routes/index.js";


dotenv.config();

dbConnection();

const port = process.env.PORT || 5000;

const app = express();
app.use(
    cors({

    //add the netlify website link here 
      origin: ["http://localhost:3000", "http://localhost:3001", "https://task-manager-eh.netlify.app"],
      methods: ["GET", "POST", "DELETE", "PUT"],
      credentials: true,
    })
  );
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(morgan("dev"));
app.use("/api", routes);

app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on ${port}`));
  
