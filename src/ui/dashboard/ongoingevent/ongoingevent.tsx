/******************************************************************************************************************************************************
Copyright (c) 2023 Carl Zeiss Meditec AG All rights reserved.  * Use of this source code is governed by a BSD-style  * license that can be found in the 
LICENSE file.
*********************************************************************************************************************************************************/
import React from "react"
import './ongoingevent.css'
import EventCard from "../event-cards/eventCard";


const OnGoingMeetings = () => {
    return (
      <div className="ongoing_meetings">
        <div className="heading">
          <p id="ongoing_meeting_title">Ongoing Meetings </p>
        </div>
        <div className="line">
          <hr />
        </div>
        <div className="meetings grid-container">
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
          <div className="grid-item">
            <EventCard />
          </div>
          <div className="grid-item">
            <EventCard />
          </div>
        </div>
        <div className="heading">
          <p id="ongoing_meeting_title">Upcoming Meetings </p>
        </div>
        <div className="line">
          <hr />
        </div>
        <div className="meetings grid-container">
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
    );
}

export default OnGoingMeetings;
