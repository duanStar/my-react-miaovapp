import http from './http';

export default function putMessage(id,info){
    return function(dispatch){
        return http.post('/lecturer/addcomment',{
            article_id:id,
            content:info
        }).then(res=>{
            if(res.data.code!==0){
                alert(res.data.msg);
            }
            return true;
        });
    }
}