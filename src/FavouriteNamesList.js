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

  const message =
    favName.length === 0
      ? ` Click some names below to add to your favourites`
      : null;
  return (
    <div className="favNamesList-wrapper">
      {
        <ul className="name-list">
          <span className="fav-list-tittle">Favourites: </span>
          <span className="fav-list-tittle">{message}</span>
          <li className="name-list-item">{favName}</li>
        </ul>
      }
    </div>
  );
};

export default FavouriteNamesList;
