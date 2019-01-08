import Api from "./Api";

export default {
  review(number) {
    return Api().post("review", number);
  }
};
