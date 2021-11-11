import axios from "axios";

class AppService {
  getGlobalData = async ({url}) => {
    try {
      const response = await axios.get(url);
      return response?.data || [];
    } catch (error) {
      throw(error)
    }
  };
  createUser = async ({url, payload}) => {
    try {
      const response = await axios.post(url, payload);
      return response?.data || {};
    } catch (error) {
      throw(error)
    }
  };
  deleteUser = async ({url, payload}) => {
    try {
      const response = await axios.delete(`${url}/${payload}`);
      return response?.data || {};
    } catch (error) {
      throw(error)
    }
  }
}

export default AppService;