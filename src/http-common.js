import axios from "axios";
export default axios.create({
  baseURL: "https://stage.api.sloovi.com/login",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',          
  }
});