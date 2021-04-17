import React,{useState, useEffect, useRef} from 'react';
import BScroll from 'better-scroll';
import {useInnerHeight} from '../hook/index';

function Frame(props){
    let {children,pullUp,getData} = props;
    let innerHeight = useInnerHeight();
    const [showMenu,setShowMenu] = useState(false);
    const wrap = useRef();
    function changeShowMenu(){
        setShowMenu(!showMenu);
    }
    useEffect(()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
        window.pageScroll = new BScroll(wrap.current,{
            scrollY: true,
            preventDefaultException:{ 
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/,
                className: /(^|\s)work_a(\s|$)/ 
            },
            pullUpLoad: pullUp?true:false,
            momentum:true,
            bounce: false,
            click: true,
            mouseWheel: true,
        });
        if(pullUp){
            window.pageScroll.on('pullingUp',()=>{
                getData().then(res=>{
                    if(res){
                        window.pageScroll.finishPullUp();
                        window.pageScroll.refresh();
                    }else{
                        window.pageScroll.closePullUp();
                        window.pageScroll.off('pullingUp', ()=>{
                            getData().then(res=>{
                                if(res){
                                    window.pageScroll.finishPullUp();
                                    window.pageScroll.refresh();
                                }else{
                                    window.pageScroll.closePullUp();
                                }
                            });
                        });
                    }
                });
            });
        }
        return ()=>{
            window.pageScroll = null;
        }
    });
    return (
        <div className="frame_wrap">
            <div id='main' style={{
                height:innerHeight
            }}
            >
                <div className="pageWrap" ref={wrap}>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frame;