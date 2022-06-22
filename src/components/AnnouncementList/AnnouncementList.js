import React from "react";
import "./AnnouncementList.css"


function AnnouncementList() {
let topic = [{
id:"1",
topic:"JavaScript",
student:"Bryce",
date:"22/06/2022",
time:"17:30"
},
{
id:"2",
topic:"SQL",
student:"Andy",
date:"27/06/2022",
time:"17:30"}]



return(
            <div className="Container-card">
            { topic.map(function (item){
             return(
             <div key={item.id} className="Announcement-card">
               <h3>{item.topic}</h3>
                <p>Room: {item.id}</p>
                <h3>{item.student}</h3>
                <p>{`${item.date} ${item.time}`}</p>
                </div>)})}      
             </div>
);
    
}

export default AnnouncementList