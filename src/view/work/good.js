import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {getGood,setGood,cancelGood} from '../../store/action/good';

function Good(props){
    let {goodNum,id} = props;
    let {good, goodId, login} = useSelector(state=>({
        ...state.good,
        login: state.login
    })); 
    let history = useHistory();
    let dispatch = useDispatch();
    let [goodCount,setGoodCount] = useState(parseInt(goodNum));
    useEffect(()=>{
        dispatch(getGood(id));
    }, [login]);
    let point ={};
    return (
        <p className="miiaov_zan">
            <span>有{goodCount}人学的很赞</span>
            <span 
                className={"iconfont icon-tuijian1 " + (good?'good':'')}
                onTouchStart={(e)=>{
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
                        if (login){
                            if(good){
                                dispatch(cancelGood(id,goodId)).then(res=>{
                                    if(res){
                                        setGoodCount(goodCount - 1);
                                    }
                                });
                            }else{
                                dispatch(setGood(id)).then(res=>{
                                    if(res){
                                        setGoodCount(goodCount + 1);
                                    }
                                });
                            }
                        }else{
                            history.push('/login');
                        }
                    }
                }}
            ></span>
        </p>
    )
}

export default Good;