import React from 'react';
import logo from '../../resources/24.png';
import './meetlist.css'
// import { useDispatch } from "react-redux";
// import { getLoginRequest } from '../../core/actioncreators/LoginActionCreator'

interface Props {
  isZero: boolean
}

const MeetList: React.FC<Props> = ({ isZero }) => {

  console.log("calling meeting list");
  // console.log(isZero);
  // const dispatch = useDispatch();
  // dispatch(getLoginRequest())

  if (isZero === true) {
    return (
      <div className='meetings'>
        <img id="logo" src={logo} alt='/' />
        <h4>No meetings planned</h4>
      </div>
    )
  }

  else {
    return (
      <div className="meeting_list">
        <h2>Meeting list in here</h2>
      </div>
    )
  }
}

export default MeetList;
