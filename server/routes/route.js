import express from "express";
import { addUser, getUsers } from "../controllers/user-controller.js";

const route = express.Router();

// route for user
route.post("/add", addUser).get("/get", getUsers);

// route for conversation

//route for messages

export default route;
