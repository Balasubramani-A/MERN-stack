import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

export async function register(username, email, password) {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, email, password },{
        withCredentials: true
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
