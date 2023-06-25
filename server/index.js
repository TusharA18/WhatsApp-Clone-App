import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectToDB from "./database/db.js";
import routes from "./routes/route.js";

// configuration
dotenv.config();
connectToDB();
const app = express();
const port = process.env.PORT || 5001;

// middleware
app.use(cors());
app.use(morgan("common"));

// routes
app.use("/", routes);

// listen
app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
