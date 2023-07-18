import express from "express";
import { addUser, getUsers } from "../controllers/user-controller.js";
import {
  addConversation,
  getConversation,
} from "../controllers/conversation-controller.js";
import {
  addMessage,
  deleteAllMessages,
  getMessages,
} from "../controllers/message-controller.js";
import upload from "../middleware/upload.js";
import { getFile, uploadFile } from "../controllers/file-controller.js";

// configuration
const route = express.Router();

// route for user
route.post("/add", addUser).get("/get", getUsers);

// route for conversation
route
  .post("/conversation/add", addConversation)
  .post("/conversation/get", getConversation);

// route for messages
route
  .post("/message/add", addMessage)
  .get("/message/get/:id", getMessages)
  .post("/message/delete", deleteAllMessages);

// route for uploads
route
  .post("/file/upload", upload.single("file"), uploadFile)
  .get("/file/:filename", getFile);

export default route;
