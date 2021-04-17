import React from 'react';
import Tab from '../../common/component/tab';
import Article from './article';
import Good from './good';
import MessageList from './messageList';

function Main(props){
    let {data} = props
    return (
        <div className="workDetails">
            <Tab imgData={data.image_path.map(item=>item.path)} render={(src)=>{
                return <img src={src} alt=""/>
            }}/>
            <div className="miiaov_box">
                <Article data={data} />
                <article className="miiaov_comment">
                    <Good goodNum={data.good} id={data.id} />
                    <MessageList />
                </article>
            </div>  
        </div>
    )
}

export default Main;