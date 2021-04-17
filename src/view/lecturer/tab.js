import React from 'react';
import Tab from '../../common/component/tab';

function LecturerTab(props){
    let {data,newData,showAlert} = props;
    if(data.length>0){
        return <Tab imgData={newData} render={(item1)=>{
            let point = {};
            return <ul className='lecturer_list'>
                {item1.map(item=><li onTouchStart={(e)=>{
                    let touch = e.changedTouches[0];
                    point.x = touch.pageX;
                    point.y =touch.pageY;
                }} onTouchEnd={(e)=>{
                    let touch = e.changedTouches[0];
                    let nowPoint = {
                        x: touch.pageX,
                        y: touch.pageY
                    }
                    if(Math.abs(nowPoint.x - point.x)<5&&
                    Math.abs(nowPoint.y - point.y)<5){
                        showAlert(item);
                    }
                }} key={item.id + ''+Math.random()}>
                    <img src={item.icon} alt=''/>
                    <p>{item.title}</p>
                </li>)}
            </ul>
        }}></Tab>
    }else{
        return '';
    }
}

export default LecturerTab;