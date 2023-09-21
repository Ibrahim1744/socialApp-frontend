import axios from "axios";


const request=axios.create({
  baseURL:"http://localhost:27017"
})
export default request;