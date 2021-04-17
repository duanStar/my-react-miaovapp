import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import putMessage from '../../store/action/putMessage';

function Message(props){
    let {show,setShowMessage,id} = props;
    let [info,setInfo] = useState("");
    let [put,setPut] = useState(false);
    let dispatch = useDispatch();
    let login = useSelector(state=>state.login);
    return (
        <div className="message_wrap" style={{
            transform: `translateY(${show?0:'100%'})`
        }}>
            <textarea value={info} onChange={(e)=>{
                setInfo(e.target.value);
            }}></textarea>
            {!put?<footer className="miiapv_footer" onClick={()=>{
                if(!info.trim()){
                    alert("请输入内容");
                    return;
                }
                dispatch(putMessage(id,info)).then(res=>{
                    if(res){
                        setPut(false);
                        dispatch({
                            type: 'MESSAGE_ADD',
                            messageList: {
                                content: info,
                                create_time: Date.now(),
                                username: login
                            }
                        });
                        setShowMessage(false);
                        setInfo("");
                    }
                });
                setPut(true);
            }}>
                发表评论
            </footer>:
            <footer className="miiapv_footer put">
                评论提交中
            </footer>}
        </div>
    );
}

export default Message;