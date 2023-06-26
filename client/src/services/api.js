import axios from "axios";

const url = import.meta.env.VITE_REACT_SERVER_URL;

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log(`Error while accessing addUser API `, error.message);
  }
};
