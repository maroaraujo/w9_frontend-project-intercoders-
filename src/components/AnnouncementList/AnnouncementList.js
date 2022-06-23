import React from "react";
import "./AnnouncementList.css"
import Axios from "axios";
import { useState } from "react";

function AnnouncementList() {
//const [keycourses, setkeycourses] = useState([keycourse])

let keycourse = [{
id:"1",
keycourse:"JavaScript",
volunteerName:"Bryce",
date:"22/06/2022",
time:"17:30"
},
{
id:"2",
keycourse:"SQL",
volunteerName:"Andy",
date:"27/06/2022",
time:"17:30"}]


// function getVolunteer() {
//   console.log("Inside Axios");
//   Axios.get("http://localhost:3001/announcement").then((response) => {
//     setkeycourses(response.data.payload);
//   });
// }



return(
            <div className="Container-card">
            { keycourse.map(function (item){
             return(
             <div key={item.id} className="Announcement-card">
               <h3>{item.keycourse}</h3>
                <p>Room: {item.id}</p>
                <h3>{item.volunteerName}</h3>
                <p>{`${item.date} ${item.time}`}</p>
                </div>)})}      
             </div>
);
    
}

export default AnnouncementList