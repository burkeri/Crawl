import Api from "./Api";

export default {
  search(search) {
    return Api().post("search", search);
  }
};
