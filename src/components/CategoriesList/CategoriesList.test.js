import * as React from "react";
import * as ReactDOM from "react-dom";
import CategoriesList from "./CategoriesList.js";

it("Categories - renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CategoriesList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
