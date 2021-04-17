import React,{useState} from 'react';
import Router from './router/index';
import Header from './common/component/header';
import Menu from './common/component/menu';

function App() {
  const [showMenu,setShowMenu] = useState(false);
  function changeShowMenu(){
      setShowMenu(!showMenu);
  }
  return (
    <div className="App">
      <Header changeShowMenu={changeShowMenu} />
      <Menu setShowMenu={setShowMenu} />
        <div className="pageWrap" style={{
                transform: showMenu?"translateX(4.5rem)":''
            }} onTouchStart={()=>{
                setShowMenu(false);
            }}>
          <Router />
        </div>
    </div>
  );
}

export default App;
