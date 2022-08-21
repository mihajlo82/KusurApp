// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { JwtToken } from "./Api_Constants"
import { url } from "./Api_Constants"
import axios from 'axios';

export const getData = async() =>  await axios.get( url, { headers: { Authorization: "Bearer " + JwtToken }} );