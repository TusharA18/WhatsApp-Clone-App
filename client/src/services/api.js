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
