import axios from 'axios';
console.log(process.env.baseURL)
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
export default axios;