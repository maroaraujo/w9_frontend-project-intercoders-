import React from "react";
import { useState } from "react";
import axios from "axios";

function StudentInput(props) {
  const [more,setMore] =useState('More')
  /*const [studentCourse, setStudentCourse] = useState([])

    // To send name of students to the database
      function postStudents() {
        console.log("Inside Axios");
        Axios.post("http://localhost:3001/waitinglist", {}).then((response) => {
          console.log(response);
          if (response.data.payload.length > 0) {
            console.log("Hello, " + response.data.payload[0].username);
            setStudentCourse("Hello, " + response.data.payload[0].username);
          } else {
            console.log("User is not found");
            setStudentCourse("User is not found");
          }
        });
      }*/
  const [text, setText] = useState("");
  const [students, setStudent] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  function handleChange(e) {
    setText(e.target.value);
    // console.log(text)
  }

  function handleClick(e) {
    e.preventDefault();
    setStudent([
      ...students,
      {
        studentName: text.toLowerCase(),
        id: students.length + 1,
        keyCourse: props.value,
      },
    ]);
  }
  console.log(students);
  console.log(more)
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
          <button className="addvolunteer" onClick={() => { if (seeMore=== true){setSeeMore(false); setMore('More') } else setSeeMore(true); setMore('Less')} }> See {more}</button>
        )}
      </ul>
    </div>
  );
}

export default StudentInput;
