import axios from "axios";

class AppService {
  getGlobalData = async ({url}) => {
    try {
      const response = await axios.get(url);
      return response?.data || [];
    } catch (error) {
      alert(error)
    }
  };
  createUser = async ({url, payload}) => {
    try {
      const response = await axios.post(url, payload);
      return response?.data || {};
    } catch (error) {
      alert(error)
    }
  };
  getUser = async ({url, user_id}) => {
    try {
      const response = await axios.post(url, {params: { user_id }});
      return response?.data || {};
    } catch (error) {
      alert(error)
    }
  };
  deleteUser = async ({url, user_id}) => {
    try {
      const response = await axios.delete(url, {params: { user_id }});
      return response?.data || {};
    } catch (error) {
      alert(error)
    }
  }
}

export default AppService;