import React from "react";

const FavouriteNamesList = (props) => {
  const favName = props.data.map((person, ind) => {
    let babySex = person.sex === "m" ? "baby-boy" : "baby-girl";
    return (
      <li
        onClick={() => props.removeFavName(person)}
        key={ind}
        className={`list-item ${babySex}`}
      >
        {person.name}
      </li>
    );
  });
  // if (props.data.length > 0)


  return (
    <div className="favNamesList-wrapper">
      {
        <ul className="name-list">
          <span className="fav-list-tittle">Favourites</span>
          {favName}
        </ul>
      }
    </div>
  );
};

export default FavouriteNamesList;
