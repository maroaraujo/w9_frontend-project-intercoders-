import React from 'react';
import {useState} from 'react'
import "./CategoriesList.css";
import javascript from "../../img/javascript-logo.png"
import Volunteer from '../Volunteer/Volunter';

function CategoriesList () {
    const [text,setText]=useState('');
    const [students, setStudent] = useState([]);

    // function deleteStudent(e){
    // e.preventDefault()
    // const deletedStudents = ([...students.slice(students.id,students.id),...students.slice(students.id+1)])
    // console.log(deletedStudents)
    // } 

    function handleChange (e) {
    setText(e.target.value)
    // console.log(text)
    }

    function handleClick(e){
    e.preventDefault()
    setStudent([...students,{studentName:text, id:students.length+1}])
    }
    // console.log(students)


    return (
    <div className = "CategoriesList--container">
    <div className='topic--categories'>
        <img src={javascript}/>
        <h3>JavaScript</h3>
    </div>
    <div className='input-student'>
        <input onChange={handleChange} type="text" placeholder="Student's name"></input>
    <button type= "submit" onClick={handleClick}>+</button>
     {students.map(function(students){return <li key={students.id}>{students.studentName} <button key={students.id} className='deleteButton'> X</button></li> })}
    </div>
    <Volunteer/>
    </div>
    )
}

export default CategoriesList;