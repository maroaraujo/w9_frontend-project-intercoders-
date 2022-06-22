import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

function StudentInput(props) {
  const [more, setMore] = useState('More')
  const [text, setText] = useState("");
  const [students, setStudent] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  function handleChange(e) {
    setText(e.target.value);
    // console.log(text)
  }
  // To send name of students to the database
  async function postStudent() {
    console.log("Inside Axios");
    Axios.post("http://localhost:3001/waitinglist", {
      studentname: students[students.length - 1].studentName,
      keycourse: students[students.length - 1].keyCourse
    })
      .then((response) => {
        console.log(response);
      })
    console.log(students[students.length - 1].studentName);;
  }
  useEffect(() => {
    if (students.length !== 0) {
      postStudent();
    }
    console.log(students);
  }, [students])

  function getStudent() {
    console.log("Inside Axios");
    Axios.get("http://localhost:3001/waitinglist")
    .then((response) => {
      setStudent([...response.data.payload]);
      console.log(response);
    })
  }
  useEffect(()=>{
    getStudent()
  },[])

function handleClick(e) {
    e.preventDefault();
    setStudent((prev)=>[
      ...prev,
      {
        studentName: text.toLowerCase(),
        id: prev.length + 1,
        keyCourse: props.value,
      },
    ])
  }
  return (
    <div className="input-student">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Student's name"
      ></input>
      <button className="addstudent" type="submit" onClick={handleClick}>
        +
      </button>
      <ul>
        {!seeMore
          ? students.slice(0, 2).map(function (students) {
            return (
              <li key={students.id}>
                •{students.studentName}{" "}
                <button key={students.id} className="deleteButton">
                  {" "}
                  X
                </button>
              </li>
            );
          })
          : students.map(function (students) {
            return (
              <li key={students.id}>
                •{students.studentName}{" "}
                <button key={students.id} className="deleteButton">
                  {" "}
                  X
                </button>
              </li>
            );
          })}
        {students.length > 2 && (
          <button className="addvolunteer" onClick={() => { if (seeMore === true) { setSeeMore(false); setMore('More') } else if (seeMore === false) { setSeeMore(true); setMore('Less') } }}> See {more}</button>
        )}
      </ul>
    </div>
  );
}

export default StudentInput;
