import React,{useState} from 'react'
import close from '../../resources/enabled.png'
import './createmeetingpopup.css'



const CreateMeetingPopUp = () => {

let options:string[]=['Region1','Region2','Region3'];
let text:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad odio eum repellendus eaque consequatur quisquam consequuntur. Incidunt sed nostrum non illo voluptates temporibus impedit laudantium sequi! Delectus, architecto. Veritatis!";

return (
<div className="create_meeting_popup_ui">
    <div className="topcolor"></div>
    <div className="popup_container">
        <div className="container_heading">
            <h4>Create Meeting</h4>
            <img src={close} alt='/' />
        </div>

        {/* Input Form */}
        <div className="container_form">
            
            <form name='input_form'>
                {/* Event Name                 */}
                <label htmlFor = "name_of_event">NAME OF EVENT</label><br/><br/>  
                <textarea id="name_of_event" name ="name_of_event" placeholder='eg : Zeiss Stand up meeting' maxLength={100} rows={2} required/>
                <br/><br/>      

                {/* Participant list */}
                <label htmlFor='add_users'>ADD PARTICIPANTS</label><br /><br/>
                 <input type="email" id="add_participants" name="participants" placeholder='user1@gmail.com' required/>
                <br/><br/>

                {/* {Region-Date-Time in grid}  */}
                <div className="grid_elements">
                    <div className="element"> 
                        <label htmlFor='region'>SELECT REGION</label><br/><br/>
                        <select name='region'>
                            {options.map((option) => (
                                    <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="element">
                        <label htmlFor='date'>DATE</label><br/><br/>
                        <input type='date' name='date' id='date' required></input>
                    </div> 

                    <div className="element">
                        <label htmlFor='time'>TIME</label><br/><br/>
                        <input type='time' name='time' id='time' required></input>
                    </div> 
                </div>
                <br/><br/>
                <label htmlFor = "description_of_event">EVENT DESCRIPTION</label><br/><br/>  
                <textarea id="description_of_event" name ="description_of_event" placeholder={text} maxLength={500} rows={3} required/>
                <br/><br/> 
            
            </form>
        </div>
    </div>
</div>  )
}

export default CreateMeetingPopUp