import React from 'react'
import "./upcomingmeetings.css"
import logo from '../../../resources/calender_icon.png';
import EventCard from '../event-cards/eventCard';
import '../ongoingevent/ongoingevent.css'

const UpcomingMeetings = () => {
  return (
    <div className='upcoming_meetings_list'>
      {/* <div className="heading">
        <h2>Upcoming Meetings</h2>
      </div>
      <div className='line'>
        <hr />
      </div>
      <div className='meetings'>
        <img id="logo" src={logo} alt='/' />
        <h4>No meetings planned</h4>
      </div> */}
        <div className="heading">
          <p id="ongoing_meeting_title">Upcoming Meetings </p>
        </div>
        <div className="line">
          <hr />
        </div>
        <div className="meetings-container grid-container">
          <div className="grid-item">
            <EventCard />
          </div>
          <div className="grid-item">
            <EventCard />
          </div>
          <div className="grid-item">
            <EventCard />
          </div>
          <div className="grid-item">
            <EventCard />
          </div>
        </div>
    </div>
  )
}

export default UpcomingMeetings