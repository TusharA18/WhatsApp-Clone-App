import User from "../models/User.js";

export const addUser = async (req, res) => {
  try {
    let exist = await User.findOne({ sub: req.body.sub });

    if (exist) {
      return res.status(200).json({ msg: "user already exists!" });
    }

    const newUser = new User(req.body);

    await newUser.save();

    return res.status(200).json({ newUser });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
