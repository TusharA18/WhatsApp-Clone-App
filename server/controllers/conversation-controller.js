import Conversation from "../models/Conversation.js";

export const addConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;

    const exist = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (exist) {
      return res.status(200).json({ msg: "conversation already exists!" });
    }

    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });

    await newConversation.save();

    return res.status(200).json({ msg: "conversation saved successfully!" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;

    const conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    return res.status(200).json(conversation);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
