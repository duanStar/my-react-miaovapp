import React,{useState} from "react";
import {withRouter} from 'react-router-dom';
import {useBack} from '../../common/hook/index';
import {useDispatch} from 'react-redux';
import login from '../../store/action/login';

function LoginU(props) {
    let {history, setDeg} = props;
    const dispatch = useDispatch();
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [vcode,setVcode] = useState("");
    const [vcodeShow,setVcodeShow] = useState(false);
    const [vcodeSrc,setVcodeSrc] = useState("/miaov/user/verify/"+Date.now());
    let back = useBack(history);
    function toLogin(){
      dispatch(login({
        verify:vcode,
        username:user,
        password
      })).then(data=>{
        alert(data.msg);
        setTimeout(()=>{
          if(data.code !== 0){
            setVcodeSrc("/miaov/user/verify/"+Date.now());
            setVcode('');
          }else{
            back();
          }
        },100);
      });
    }
    let point = {};
  return (
    <div className="login_box">
      <figure className="user_img">
        <img src={require('../../common/images/user_img.png').default} alt="" />
        <figcaption>如有账号，请直接登录</figcaption>
      </figure>
      <div className="login_form">
        <p>
          <input type="text" placeholder="用户名" value={user} onChange={(e)=>{
              setUser(e.target.value);
          }}/>
        </p>
        <p>
          <input type="password" placeholder="请输入密码" value={password} onChange={(e)=>{
              setPassword(e.target.value);
          }} />
        </p>
        <p className="clearfix">
          <input type="text" className="verifyInput" placeholder="验证码" value={vcode} onChange={(e)=>{
              setVcode(e.target.value);
          }} onFocus={()=>{
              setVcodeShow(true)
          }} />
          {vcodeShow?<img 
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
              setVcodeSrc("/miaov/user/verify/"+Date.now());
            }
        }}
          className="verify" src={vcodeSrc} alt="" />:""}
        </p>
        <button className="form_btn" onClick={()=>{
          toLogin();
        }}>登录</button>
        <p className="form_tip">
          没有帐号？<a className="register" onClick={()=>{
            setDeg(-180)
          }}>立即注册</a>
        </p>
      </div>
    </div>
  );
}

export default withRouter(LoginU);
