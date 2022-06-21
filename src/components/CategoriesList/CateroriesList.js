import React from 'react';
import {useState} from 'react'
import "./CategoriesList.css";
import javascript from "../../img/javascript-logo.png"

function CategoriesList () {
    const [text,setText]=useState('');
    const [students, setStudent] = useState([]);

    function handleChange (e) {
    setText(e.target.value)
    console.log(text)
    }

    function handleClick(e){
    e.preventDefault()
    setStudent([...students,{studentName:text, id:students.length+1}])
    }
    console.log(students)


    return (
    <div className = "CategoriesList--container">
    <div className='topic--categories'>
        <img src={javascript}/>
        <h3>JavaScript</h3>
    </div>
    <div className='input-student'>
        <input onChange={handleChange} type="text" placeholder="Student's name"></input>
    <button type= "submit" onClick={handleClick}>+</button>
     {students.map(function(students){return <li key={students.id}>{students.studentName} <button onClick={deleteStudent}> X</button></li> })}
    </div>
    <div className='volunteer'>
    <input type="text" placeholder="Volunteer's name"></input>
    <select name="day">
        <option value= "available">Available Date: </option>
        <option value= "monday"> Monday </option>
        <option value= "tuesday"> Tuesday </option>
        <option value= "thursday"> Thursday </option>
        <option value= "friday"> Friday </option>
    </select>
    <button type= "submit" >Submit</button>
    </div>
    </div>
    )
}

export default CategoriesList;