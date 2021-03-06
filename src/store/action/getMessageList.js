import http from './http';
export default function getMessageList(id){
    return function(dispatch, getState){
        dispatch({
            type:"MESSAGE_LOAD"
        });
        let {page} = getState().messageList;
        return http.post(`/lecturer/getcomment?page=${page}&rows=8`,{
            article_id: id
        }).then(res=>{
            if(!res.data.length){
                dispatch({
                    type:"MESSAGE_LOADEND"
                });
                return false;
            }
            dispatch({
                type:"MESSAGE_LOADOVER",
                messageList:res.data
            });
            return true;
        });
    }
}