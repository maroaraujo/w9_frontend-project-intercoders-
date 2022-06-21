import React from 'react';
import "./CategoriesList.css";
import TopicCard from '../TopicCard/TopicCard';

function CategoriesList () {
   
    // function deleteStudent(e){
    // e.preventDefault()
    // const deletedStudents = ([...students.slice(students.id,students.id),...students.slice(students.id+1)])
    // console.log(deletedStudents)
    // } 

   


    return (
    <div className = "CategoriesList--container">
    <TopicCard/>
    </div>
    )
}

export default CategoriesList;