import axios from "axios";

const url = import.meta.env.VITE_REACT_SERVER_URL;

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log(`Error while accessing addUser API `, error.message);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${url}/get`);

    return response.data;
  } catch (error) {
    console.log(`Error while accessing getUsers API `, error.message);
  }
};

export const addConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log(`Error while accessing addConversation API `, error.message);
  }
};

export const getConversation = async (data) => {
  try {
    const response = await axios.post(`${url}/conversation/get`, data);

    return response.data;
  } catch (error) {
    console.log(`Error while accessing getConversation API `, error.message);
  }
};

export const addMessage = async (data) => {
  try {
    await axios.post(`${url}/message/add`, data);
  } catch (error) {
    console.log(`Error while accessing addMessage API `, error.message);
  }
};

export const getMessages = async (id) => {
  try {
    const response = await axios.get(`${url}/message/get/${id}`);

    return response.data;
  } catch (error) {
    console.log(`Error while accessing getMessages API `, error.message);
  }
};

export const deleteAllMessages = async (data) => {
  try {
    await axios.post(`${url}/message/delete`, data);
  } catch (error) {
    console.log(`Error while accessing getMessages API `, error.message);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/file/upload`, data);
  } catch (error) {
    console.log(`Error while accessing uploadFile API `, error.message);
  }
};
