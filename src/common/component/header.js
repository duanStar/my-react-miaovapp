import React,{useEffect,useState} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {useBack} from '../../common/hook/index';
import {useSelector,useDispatch} from 'react-redux';
import isLogin from '../../store/action/isLogin';
import logOut from '../../store/action/logOut';

function Header(props){
    let {changeShowMenu} = props;
    let {pathname} = props.location;
    let back = useBack(props.history);
    let dispatch = useDispatch();
    let username = useSelector(state=>state.login);
    const [isBtnShow,setBtnShow] = useState(false);
    useEffect(()=>{
        dispatch(isLogin());
    },[]);
    return (
        <div>
            <header id="header">
                <nav className="menu">
                    {/* 返回按钮 */}
                    {pathname==='/login'?<a className="header-btn-left iconfont icon-back" onClick={()=>{
                        back();
                    }}></a>:''}
                    {/* 菜单按钮 */}
                    {pathname==='/login'?'':<a onClick={()=>{
                        changeShowMenu();
                    }} className="header-btn-left iconfont icon-hycaidan"></a>}
                    {/* <Link to="">导航</Link> */}
                </nav>
                <h1 className="logo">miaov.com</h1>
                {pathname==='/login'?'':(username?<span className="header-btn-right">
                    <span className="header-user" onClick={()=>{
                        setBtnShow(!isBtnShow);
                    }}>{username}</span>
                    <span className="header-logout-btn" style={{
                        display:isBtnShow?'block':'none'
                    }} onClick={()=>{
                        dispatch(logOut());
                    }}>退出</span>
                </span>:<Link className="user" to="/login"></Link>)}
            </header>
        </div>
    );
}

export default withRouter(Header);