import mongoose from "mongoose";

const connectToDB = () => {
  try {
    mongoose
      .connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("DB connected");
      })
      .catch((error) => {
        console.log(error.message);
      });
  } catch (error) {
    console.log(error.message);
  }
};

export default connectToDB;
