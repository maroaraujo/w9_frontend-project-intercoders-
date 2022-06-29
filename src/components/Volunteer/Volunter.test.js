import * as React from "react";
import * as ReactDOM from "react-dom";
import Volunteer from "./Volunter.js";

it("Categories - renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Volunteer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
