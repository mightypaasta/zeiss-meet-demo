import meet_logo from '../../../resources/user_tab_icon.png'
import expand_logo from '../../../resources/expand_arrow_icon.png'
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className="Sidebar-container">
            <img src={meet_logo} className='meet_logo' alt="" />
            <img src={expand_logo} className='expand_logo' alt="" />
        </div>
    )
}

export default Sidebar;