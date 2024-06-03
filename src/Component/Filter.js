import React from "react";

export default function Filter({ filterData }) {
  return (
    <div>
      {filterData.map((item) => {
        return <button key={item.id}>{item.title}</button>;
      })}
    </div>
  );
}
