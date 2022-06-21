import React from "react";
import './Announcement.css'
import AnnouncementList from "../AnnouncementList/AnnouncementList";

function Announcement({topic}) {
    return(
        <div className="Main--container">
           <h2>
                Announcements:
            </h2>
          <AnnouncementList/>
        </div>
    
    )
    
}

export default Announcement;