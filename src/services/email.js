import axios from 'axios';
import { EMAIL_URL } from '../config';

export default function(msgObj) {
  return axios.post(EMAIL_URL, msgObj);
}
