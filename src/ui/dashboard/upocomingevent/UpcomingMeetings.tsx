import React from 'react'
import "./upcomingmeetings.css"
import logo from '../../../resources/calender_icon.png';

const UpcomingMeetings = () => {
  return (
    <div className='upcoming_meetings'>
      <div className="heading">
        <h2>Upcoming Meetings</h2>
      </div>
      <div className='line'>
        <hr />
      </div>
      <div className='meetings'>
        <img id="logo" src={logo} alt='/' />
        <h4>No meetings planned</h4>
      </div>
    </div>
  )
}

export default UpcomingMeetings