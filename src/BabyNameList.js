import React from "react";

const BabyNameList = ({ data }) => {
  return (
    <ul className="name-list">
      {data.map((name, ind) => {
        let babySex = name.sex === "m" ? "baby-boy" : "baby-girl";
        return <li key={ind} className={`list-item ${babySex}`} >{name.name}</li>;
      })}
    </ul>
  );
};

export default BabyNameList;
