import React from "react";
import {useState} from "react"

function StudentInput(props) {

 const [text,setText]=useState('');
 const [students, setStudent] = useState([]);

  function handleChange (e) {
    setText(e.target.value)
    // console.log(text)
    }

    function handleClick(e){
    e.preventDefault()
    setStudent([...students,{studentName:text.toLowerCase(), id:students.length+1,keyCourse:props.value}])
    }
    console.log(students)

return(
   <div className='input-student'>
        <input onChange={handleChange} type="text" placeholder="Student's name"></input>
    <button type= "submit" onClick={handleClick}>+</button>
     {students.map(function(students){return <li key={students.id}>{students.studentName} <button key={students.id} className='deleteButton'> X</button></li> })}
    </div>

)
    
}

export default StudentInput;