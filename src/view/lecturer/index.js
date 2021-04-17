import React, { useEffect, useState } from 'react';
import Frame from '../../common/component/frame';
import {useSelector, useDispatch} from 'react-redux';
import getLecturers from '../../store/action/getLecturers';
import LecturerTab from './tab';
import Join from './join';
import Footer from './footer';
import LecturerAlert from './lecturerAlert';

function Lecturer(){
    let [show,setShow] = useState(false);
    let [alertData,setAlertData] = useState(null);
    let {data} = useSelector(state=>state.lecturers);
    let newData = [];
    function showAlert(data){
        setAlertData(data);
        setShow(true);
    }
    for (let i = 0; i < data.length; i+=3) {
        let newArr = [];
        data[i]&&newArr.push(data[i]);
        data[i+1]&&newArr.push(data[i+1]);
        data[i+2]&&newArr.push(data[i+2]);
       newData.push(newArr);
    }
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getLecturers());
    }, []);
    return (
        <div>
            <Frame>
                <div className="teacher_banner">
                    <h2><span>妙味团队</span></h2>
                    <LecturerTab showAlert={showAlert} data={data} newData={newData} />
                </div>
                <Join />
                <Footer />
            </Frame>
            {show?<LecturerAlert alertData={alertData} setShow={setShow} />:''}
        </div>
    )
}

export default Lecturer;