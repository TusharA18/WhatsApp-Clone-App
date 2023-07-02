import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectToDB from "./database/db.js";
import routes from "./routes/route.js";
import bodyParser from "body-parser";
import { Server } from "socket.io";

// configuration
dotenv.config();
connectToDB();
const app = express();
const port = process.env.PORT || 5001;

// middleware
app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/", routes);

// listen
const server = app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});

// Socket.io
const io = new Server(server, {
  cors: {
    origin: process.env.SOCKET_ORIGIN_URL,
  },
});

let users = [];

const addUser = (userData, socketId) => {
  !users.some((user) => user.sub === userData.sub) &&
    users.push({ ...userData, socketId });
};

const getUser = (userId) => {
  return users.find((user) => user.sub === userId);
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

io.on("connection", (socket) => {
  console.log("user connected!");

  socket.on("addUser", (userData) => {
    addUser(userData, socket.id);

    io.emit("getUsers", users);
  });

  socket.on("sendMessage", (data) => {
    const user = getUser(data.receiverId);

    io.to(user.socketId).emit("getMessage", data);
  });

  socket.on("deleteMessageTrigger", (userId) => {
    const user = getUser(userId);

    io.to(user.socketId).emit("receivedDeleteMessageTrigger");
  });

  socket.on("disconnect", () => {
    console.log("user disconnected!");

    removeUser(socket.id);

    io.emit("getUsers", users);
  });
});
