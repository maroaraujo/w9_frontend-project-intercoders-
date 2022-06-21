import React from "react";
import javascript from "../../img/javascript-logo.png"
import reactlogo from "../../img/react-logo.png"
import sql from "../../img/postgresql-logo.png"
import node from "../../img/node.png"
import Volunteer from "../Volunteer/Volunter";
import StudentInput from "../StudentInput/StudentInput";
import "./TopicCard.css"





function TopicCard() {
const topicCard=[
{topicName:"JavaScript", src:javascript}, 
{topicName:"React", src:reactlogo},
{topicName:"SQL", src:sql},
{topicName:"Node.JS", src:node}
]

return(
  <div className="card--organizer">
 {topicCard.map(function(item,index) { return(
      <div>
    <div className='topic--categories'>
    <img className="img" src={item.src} alt={item.topicName}/>
    <h3>{item.topicName}</h3>
    <div className="inputs">
    <StudentInput value = {index} />
    <Volunteer/>  
    </div>
    </div>
    </div>
    )})}
   
 </div>
);
    
}

export default TopicCard;