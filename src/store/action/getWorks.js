import http from './http';
export default function getWorks(){
    return function(dispatch, getState){
        dispatch({
            type:"LOAD"
        });
        let {page} = getState().works;
        return http.post(`/lecturer/lists?page=${page}&rows=20`,{
            order:"desc",
	        sort:"id",
	        category_id:1,
	        recommend:1
        }).then(res=>{
            if(!res.data.length){
                dispatch({
                    type:"LOADEND"
                });
                return false;
            }
            dispatch({
                type:"LOADOVER",
                data:res.data
            });
            return true;
        });
    }
}