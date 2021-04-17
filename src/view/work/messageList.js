import React from 'react';
import { useSelector } from 'react-redux';
import ToDate from '../../common/component/toDate';

function MessageList(){
    let {messageList,loading,loadEnd} = useSelector(state=>state.messageList);
    return (
    <div className="comment_list_wrap">
        {messageList.length<=0?<p className="comment_list_info">快来发布一条评论吧！</p>:<ul className="comment_list">
            {messageList.map((item,index)=><li key={index}>
                <div className="user_comment clearfix">
                    <span>{item.username}</span>
                </div>
                <div className="comment_txt">
                 {item.content}
                </div>
                <div className="comment_footer">
                    <time>
                        <ToDate time={item.create_time}/>
                    </time>
                </div>
            </li>)}
        </ul>}
        <a className="more" href="#">{loading?'正在加载中':loadEnd?'已经到底了':'上滑加载更多'}</a>
    </div>
    )
}

export default MessageList;