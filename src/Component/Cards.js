import { useState } from "react";
import Card from "./Card";

function Cards(props) {
  const [likeCourses, setLikeCourses] = useState([]);
  let courses = props.courses;
  let category = props.category;

  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((coursesCategory) => {
        coursesCategory.forEach((item) => {
          allCourses.push(item);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  }

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
