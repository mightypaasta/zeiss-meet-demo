/******************************************************************************************************************************************************
Copyright (c) 2023 Carl Zeiss Meditec AG All rights reserved.  * Use of this source code is governed by a BSD-style  * license that can be found in the 
LICENSE file.
*********************************************************************************************************************************************************/

import OnGoingMeetings from "./ongoingevent/ongoingevent";
import UpcomingMeetings from "./upocomingevent/UpcomingMeetings";



function Dashboard() {
    return (
        <div className="Dashboard">
            <OnGoingMeetings/>
            <UpcomingMeetings/>
        </div>
    );
}

export default Dashboard;
