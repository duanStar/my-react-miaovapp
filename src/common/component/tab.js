import React, { useEffect, useRef, useState } from 'react';
import BScroll from 'better-scroll';

// BScroll.use(Slide)

function Tab(props){
    let {imgData, render} = props;
    let swiperRef = useRef();
    let [now, setNow] = useState(0);
    let bscroll = null;
    useEffect(()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
        bscroll = new BScroll(swiperRef.current,{
            scrollX:true,
            scrollY:false,
            eventPassthrough: 'vertical',
            slide:{
                loop: true,
                threshold: 0.1,
                autoplay:true
            },
            momentum:false
        });
        bscroll.on('slidePageChanged',(page)=>{
            setNow(page.pageX);
        });
        swiperRef.current.addEventListener('touchstart',function(){
            bscroll.pausePlay();
        });
        swiperRef.current.addEventListener('touchend',function(){
            bscroll.startPlay();
        });
    },[]);
    return (
        <div className="banner"> 
            <div className="banner_imgs" ref={swiperRef}>
                <ul className="banner_list clearfix">
                    {imgData.map((item,index)=><li key={index}>{render(item)}</li>)}
                </ul>
            </div>
            {imgData.length < 1?'':<ul className="banner_nav">
                {imgData.map((item,index)=><li className={now===index?'active':''} key={index}></li>)}
            </ul>}
        </div>
    );
}

export default Tab;