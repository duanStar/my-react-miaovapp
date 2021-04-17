import http from './http';

export default function register(data){
    return function(dispatch){
        return http.post('/user/register',{
            ...data
        }).then(res=>{
            if(res.code === 0){
                console.log(res);
                
            }
            return res.data;
        });
    }
}