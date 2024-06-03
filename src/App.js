import React, { useEffect, useState } from "react";
import Navigation from "./Component/Navigation";
import Filter from "./Component/Filter";
import Cards from "./Component/Cards";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data);
        console.log(data.data);
      } catch (error) {
        toast.error("Not Able To Load Data");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <Navigation />
      <Filter filterData={filterData} />
      <Cards courses={courses} />
    </div>
  );
};

export default App;
