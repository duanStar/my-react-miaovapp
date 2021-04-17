import React from 'react';

function ToDate(props){
    let {time} = props;
    let nowTime = Date.now();
    let newTime = new Date(time).getTime();
    let diff = nowTime - newTime;
    if(diff<60000){
        return '刚刚';
    }else if (diff<3600000){
        return Math.floor(diff/1000/60) + '分钟之前';
    }else if (diff<86400000){
        return Math.floor(diff/1000/60/60) + '小时之前';
    }else if (diff<604800000){
        return Math.floor(diff/1000/60/60/24) + '天之前';
    }
    return time;
}

export default ToDate;