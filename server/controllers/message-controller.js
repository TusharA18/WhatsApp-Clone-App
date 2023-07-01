import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";

export const addMessage = async (req, res) => {
  try {
    const { conversationId, text } = req.body;

    const newMessage = await Message(req.body);

    await newMessage.save();

    await Conversation.findByIdAndUpdate(conversationId, {
      message: text,
    });

    return res.status(200).json({ msg: "message has been sent successfully!" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id } = req.params;

    const messages = await Message.find({ conversationId: id });

    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const deleteAllMessages = async (req, res) => {
  try {
    const { conversationId } = req.body;

    await Conversation.findByIdAndUpdate(conversationId, {
      message: "",
    });

    await Message.deleteMany({ conversationId });

    return res.status(200).json({ msg: "messages deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
