import React, { useEffect, useState } from "react";
import Navigation from "./Component/Navigation";
import Filter from "./Component/Filter";
import Cards from "./Component/Cards";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./Component/Spinner";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data);
      } catch (error) {
        toast.error("Not Able To Load Data");
      }
      setloading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <div>
        <Navigation />
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData} />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? <Spinner></Spinner> : <Cards courses={courses} />}
        </div>
      </div>
    </div>
  );
};

export default App;
