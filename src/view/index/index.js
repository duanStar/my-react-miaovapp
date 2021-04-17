import React, { useEffect, useRef, useState } from 'react';
import Tab from '../../common/component/tab';
import Works from '../../common/component/works';
import Vip from './vip';
import Course from './course';
import Miaov from './miaov';
import Frame from '../../common/component/frame';
import { useDispatch, useSelector } from 'react-redux';
import getWorks from '../../store/action/getWorks';
let imgData = [
    require('../../common/images/tab/img1.png').default,
    require('../../common/images/tab/img2.png').default,
    require('../../common/images/tab/img3.png').default,
    require('../../common/images/tab/img4.png').default
];

function Index(props){
    let dispatch = useDispatch();
    let works = useSelector(state=>state.works);
    function getWorksData(){
        let p =dispatch(getWorks());
        return p;
    }
    useEffect(()=>{
        getWorksData();
    },[]);
    return (
        <Frame pullUp={true} getData={getWorksData}>
        <div>
            <Tab imgData={imgData} render={(data)=>{
                return <img src={data} />;
            }}></Tab>
            <section className="index_content">
                <Course />
                <Vip />
                <Miaov />
                <Works works={works}/>
            </section>
        </div>
        </Frame>
    );
}

export default Index;