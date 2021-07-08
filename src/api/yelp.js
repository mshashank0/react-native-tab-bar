import axios from "axios";

export default axios.create({
  baseURL: "demo url",
  headers: {
    Authorization:
      "bearer key",
  },
});
