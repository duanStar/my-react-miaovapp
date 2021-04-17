import React from 'react';
import {NavLink} from 'react-router-dom';
import {nav} from '../../router/routes';

function Menu(props){
    let {setShowMenu} = props;
    return (
        <div>
            <nav id="menu">
                {nav.map((item,index)=><NavLink onTouchEnd={()=>{
                    setShowMenu(false);
                }}
                activeClassName='active'
                key={index} className={item.className} to={item.path} exact={item.exact}>{item.name}</NavLink>)}
            </nav>
        </div>
    )
}

export default Menu;