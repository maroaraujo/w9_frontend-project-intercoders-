import React, { useEffect } from "react";
import "./AnnouncementList.css"
import { useState } from "react";

function AnnouncementList() {
const [keycourses, setkeycourses] = useState([])
async function getVolunteers() {
  let response = await fetch ("https://intercoders.herokuapp.com/announcement");
  let data = await response.json();
  console.log("receving data from volunteers", data.payload);
  setkeycourses(data.payload);
}
useEffect(()=> {
  getVolunteers();
},[])

return(
            <div className="Container-card">
            { keycourses.map(function (item){
             return(
             <div key={item.index} className="Announcement-card">
               <h3>{item.keycourse}</h3>
                <p>Room: {item.index}</p>
                <h3>{item.volunteername}</h3>
                <p>{`${item.date} ${item.time}`}</p>
                </div>)})}   
             </div>
);}

export default AnnouncementList