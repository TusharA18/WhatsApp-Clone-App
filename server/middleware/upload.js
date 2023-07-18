import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl = process.env.MONGO_URL;

const storage = new GridFsStorage({
  url: mongoUrl,
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  file: (req, file) => {
    return {
      bucketName: "uploads",
      filename: `${Date.now()}-file-${file.originalname}`,
    };
  },
});

export default multer({ storage });
