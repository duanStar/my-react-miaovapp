import React,{useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';

function Works(props){
    let {works} = props;
    let {data,loading,loadEnd} = works;
    let wrap = useRef(null);
    useEffect(()=>{
        let imgs = wrap.current.querySelectorAll('img');
        imgs.forEach(item=>{
            item.onload = function(){
                window.pageScroll.refresh();
            }
        });
    },[data]);
    return (
        <div>
            <div className="works" ref={wrap}>
                <h3>学员作品</h3>
                <ul className="works_list clearfix">
                    {data.map(item=>(<li key={item.id + '' +Math.random()}>
                        <Link to={"/work/" + item.id} >
                            <img src={item.icon} />
                            <span className="wrork_txt clearfix">
                                <strong>{item.title}</strong>
                                <span>
                                    <em>{item.message}</em>
                                    <em>{item.good}</em>
                                </span>
                            </span>
                        </Link>
                    </li>))}
                </ul>
                <a className="more" href="#">{loading?'正在加载中':loadEnd?'已经到底了':'上滑加载更多'}</a>
                {/* 正在加载中 */}
            </div>
        </div>
    );
}
export default Works;