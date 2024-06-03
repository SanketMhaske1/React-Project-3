import { useState } from "react";
import Card from "./Card";

function Cards({ courses }) {
  const getCourses = () => {
    let allCourses = [];
    Object.values(courses).forEach((coursesCategory) => {
      coursesCategory.forEach((item) => {
        allCourses.push(item);
      });
    });
    return allCourses;
  };

  return (
    <div>
      {getCourses().map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Cards;
