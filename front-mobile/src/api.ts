import axios from "axios";

const API_URL ='https://deliver-oz.herokuapp.com';

function fetchOrders(){

  return axios(`${API_URL}/orders`)
}

export default fetchOrders;