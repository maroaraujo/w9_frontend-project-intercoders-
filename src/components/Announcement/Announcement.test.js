import { render, screen } from "@testing-library/react";
import AnnouncementList from "./Announcement.js";
/*
test("Announcement component test", () => {
  const linkElement = screen.getByText("ANNOUNCEMENTS");
  expect(linkElement).toBeInTheDocument();
});
*/

import * as React from "react";
import * as ReactDOM from "react-dom";
import Announcement from "./Announcement.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Announcement />, div);
  ReactDOM.unmountComponentAtNode(div);
});
