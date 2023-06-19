import axios from "axios";

const postsFetch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export default postsFetch;