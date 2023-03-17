import React from 'react';
import { useState } from 'react';
import "./upcomingmeetings.css";
import Meet from '../Meet list/MeetList';

const UpcomingMeetings = () => {
  
  console.log("calling upcoming events");

  let noOfMeetings:number = 0;
  let flag:boolean = false;

  if(noOfMeetings==0){
    flag = true;
  }

  
  return (
    <div className='upcoming_meetings'>
        <div className="heading">
            <h2>Upcoming Meetings</h2>
        </div>
        <div className='line'>
            <hr/>
        </div>
        <div className="meeting">
        <Meet isZero={flag}/>
        </div> 
    </div>
  )
}

export default UpcomingMeetings
