import React from "react";
import './Announcement.css'
import AnnouncementList from "../AnnouncementList/AnnouncementList";

function Announcement({topic}) {
    return(
        <div className="Main--container">
           <h2>
                ANNOUNCEMENTS
            </h2>
          <AnnouncementList/>
        </div>
    
    )
    
}

export default Announcement;