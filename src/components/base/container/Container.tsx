import UpcomingMeetings from '../../../ui/dashboard/upocomingevent/UpcomingMeetings'
import "./container.css"
import { useNavigate } from 'react-router-dom';

const Container = () => {

    let navigator= useNavigate();

    window.onpopstate = () => {
      navigator("/dashboard");
    };

  return (
    <div className="container_box">

      <div className="navbar">
        <h2>ZEISS MEET</h2>
        <button className='container-btn'>Create Event</button>
      </div>
      <div className="upcoming_meetings_ui">
        <UpcomingMeetings />
      </div>
    </div>
  )
}

export default Container