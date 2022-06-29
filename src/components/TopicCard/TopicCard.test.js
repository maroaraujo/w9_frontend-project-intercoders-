import * as React from "react";
import * as ReactDOM from "react-dom";
import TopicCard from "./TopicCard.js";

it("Categories - renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TopicCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
