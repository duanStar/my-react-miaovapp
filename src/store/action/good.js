import http from './http';

function getGood(id){
    return function(dispatch){
        return http.post('/lecturer/getgood',{
            article_id: id
        }).then(res=>{
            if(res.data.code === 0){
                dispatch({
                    type: 'GOOD',
                    goodId: res.data.gooid
                });
            }else{
                dispatch({
                    type: 'CANCEL_GOOD'
                });
            }
        });
    }
}

function setGood(id){
    return function(dispatch){
        return http.post('/lecturer/good',{
            article_id: id
        }).then(res=>{
            if(res.data.code === 0){
                dispatch(getGood(id));
                dispatch({
                    type: 'GOOD'
                });
                return true;
            }
        });
    }
}
function cancelGood(id,goodId){
    return function(dispatch){
        return http.post('/lecturer/cancelgood',{
            article_id: id,
            goodid: goodId
        }).then(res=>{
            if(res.data.code === 0){
                dispatch({
                    type: 'CANCEL_GOOD'
                });
                return true;
            }
        });
    }
}
export {getGood,setGood,cancelGood}