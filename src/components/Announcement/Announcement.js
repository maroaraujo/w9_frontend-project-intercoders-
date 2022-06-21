import React from "react";
import './Announcement.css'

function Announcement() {
    return(
        <div className="Main--container">
           <h2>
                Announcements:
            </h2>
        <div className="Announcement-container">
         
            <div className="Announcement-card">
                <h3>JavaScript</h3>
                <p>Focus Room 1</p>
                <p>Bryce </p>
                <p>22/06/2022</p>
            </div>
            <div className="Announcement-card">
                <h3>React </h3>
                <p>Focus Room 2</p>
                <p>Andy </p>
                <p>24/06/2022</p>
            </div>
            <div className="Announcement-card">
                <h3>SQL </h3>
                <p>Focus Room 3</p>
                <p>Nathan </p>
                <p>27/06/2022</p>
            </div>
        </div>
        </div>
    )
    
}

export default Announcement;