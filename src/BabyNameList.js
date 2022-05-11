import React from "react";

const BabyNameList = ({ data, handleClick }) => {
  return (
    <ul className="name-list">
      {data.map((name, ind) => {
        let babySex = name.sex === "m" ? "baby-boy" : "baby-girl";
        return <li onClick={() => handleClick(name)} key={ind} className={`list-item ${babySex}`} >{name.name}</li>;
      })}
    </ul>
  );
};

export default BabyNameList;
