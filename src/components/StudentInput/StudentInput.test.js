import * as React from "react";
import * as ReactDOM from "react-dom";
import StudentInput from "./StudentInput.js";

it("Categories - renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<StudentInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
