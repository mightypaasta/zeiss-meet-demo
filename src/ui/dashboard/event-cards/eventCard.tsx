import React from 'react'
import calendar from "../../../resources/time/date/calender/icn.png"
import clock from "../../../resources/16.png"
import info from "../../../resources/info-icon.png"
import attachment from '../../../resources/attachment.png'
import { JsxElement } from 'typescript'
import './eventCard.css'

let numberOfAttachment:number=2;

const EventCard = () => {
    return (
      <div className="event-card">
        <div className="event-header">
          <p id="event-header-calendar">
            <img src={calendar} alt="" />
            6.9.1969
          </p>
          <p>
            <img src={clock} alt="" />
            06:09
          </p>
        </div>
        <div className="event-body">
            <p id='event-title'>This is a test event  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum id corporis quibusdam! Cupiditate repellat magni quis accusamus pariatur voluptatem saepe laboriosam, incidunt consequatur quasi inventore illo earum. Quae, animi modi.</p>
            <p id='event-invite-name'> <p id="event-invite-title">Invited by:</p>  The Royal College of Truth and Lies</p>
        </div>
        <div className="event-footer">
            <a href=''>
                <img src={info} alt="" />
                Details
            </a>
            <a href=''>
                <img src={attachment} alt=""/>
                {numberOfAttachment} Attachments
            </a>
            <button>Join</button>
        </div>
      </div>
    );
}

export default EventCard;