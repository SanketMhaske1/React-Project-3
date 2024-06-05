import { useState } from "react";
import Card from "./Card";

function Cards({ courses }) {
  const [likeCourses, setLikeCourses] = useState([]);

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
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((item) => (
        <Card
          key={item.id}
          item={item}
          likeCourses={likeCourses}
          setLikeCourses={setLikeCourses}
        />
      ))}
    </div>
  );
}

export default Cards;
