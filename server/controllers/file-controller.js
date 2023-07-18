import dotenv from "dotenv";
import Grid from "gridfs-stream";
import mongoose from "mongoose";

dotenv.config();

const url = process.env.SERVER_URL;

const connection = mongoose.connection;

let gfs, gridFsBucket;

connection.once("open", () => {
  console.log("DB Connection established!");

  gridFsBucket = new mongoose.mongo.GridFSBucket(connection.db, {
    bucketName: "uploads",
  });

  gfs = Grid(connection.db, mongoose.mongo);

  gfs.collection("uploads");
});

export const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(404).json({ msg: "File not found!" });
  }

  const imageUrl = `${url}/file/${req.file.filename}`;

  return res.status(200).json(imageUrl);
};

export const getFile = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });

    const readStream = gridFsBucket.openDownloadStream(file._id);

    readStream.pipe(res);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
