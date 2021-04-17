import React, { useEffect, useRef, useState } from 'react';
import Frame from '../../common/component/frame';
import {useDispatch, useSelector} from 'react-redux';
import getWork from '../../store/action/getWork';
import getMessageList from '../../store/action/getMessageList';
import {useHistory, useParams} from 'react-router-dom';
import Skeleton from '../../common/component/skeleton';
import Main from './main';
import Message from './message';

function Work(){
    let {data,loading} = useSelector(state=>state.work);
    let login = useSelector(state=>state.login);
    let [showMessage,setShowMessage] = useState(false);
    let dispatch = useDispatch();
    let history = useHistory();
    let {id} = useParams();
    useEffect(()=>{
        dispatch(getWork(id));
        dispatch(getMessageList(id));
        return ()=>{
            dispatch({
                type:"WORK_RESET"
            });
            dispatch({
                type:"CANCEL_GOOD"
            });
            dispatch({
                type: 'MESSAGE_RESET'
            });
        } 
    },[]);
    function getData(){
        return dispatch(getMessageList(id));
    }
    return (
        <div className="detail_wrap">
            <Frame pullUp = {true} getData={getData}>
                {loading?<Skeleton />:<Main data={data} />}
            </Frame>
            <footer className="miiapv_footer" onClick={()=>{
                if(login){
                    setShowMessage(true);
                }else{
                    history.push('/login');
                }
            }} >
                回复本帖
            </footer>
            <Message id={id} show={showMessage} setShowMessage={setShowMessage}/>
        </div>
    )
}

export default Work;