import React from 'react';
import "./CategoriesList.css";

function CategoriesList () {
    return (<div className = "CategoriesList--container">
    <div className='input-student'>
    <input type="text" placeholder="Student's name"></input>
    <button type= "submit" >+</button>
    <li>Maria</li>
    </div>
    <div className='volunteer'>
    <input type="text" placeholder="Volunteer's name"></input>
    <label for="day">Available date</label>
    <select name="day">
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