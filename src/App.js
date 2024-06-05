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
  const [category, setCategory] = useState(filterData[0].title);

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
    <div className="wrapper bg-bgDark2 w-[100vw] h-[100vh] overflow-x-hidden">
      <div>
        <Navigation />
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (
            <Spinner></Spinner>
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
