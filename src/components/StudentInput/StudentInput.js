import React from "react";
import { useState } from "react";
import axios from "axios";

function StudentInput(props) {
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

  return (
    <div className="input-student">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Student's name"
      ></input>
      <button type="submit" onClick={handleClick}>
        +
      </button>
      <ul>
        {!seeMore
          ? students.slice(0, 3).map(function (students) {
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
        {students.length > 4 && (
          <button onClick={() => setSeeMore(true)}>See more</button>
        )}
      </ul>
    </div>
  );
}

export default StudentInput;
