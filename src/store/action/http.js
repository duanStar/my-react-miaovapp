import Axios from 'axios';
import qs from 'qs';

export default Axios.create({
    baseURL:"/miaov",
    withCredentials:true,
    transformRequest:(data)=>{
        return qs.stringify(data);
    }
});