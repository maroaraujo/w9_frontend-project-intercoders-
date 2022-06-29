import React from "react";
import "./CategoriesList.css";
import TopicCard from "../TopicCard/TopicCard";

//Rendering the container for the topic cards
function CategoriesList() {
  return (
    <div className="CategoriesList--container">
      <TopicCard />
    </div>
  );
}

export default CategoriesList;
