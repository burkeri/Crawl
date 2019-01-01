import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `https://glacial-harbor-18764.herokuapp.com/`
  });
};
