import React from "react";

const GenderFilter = (props) => {
  const genderType =
    props.gender === "b"
      ? `Both female & male names`
      : props.gender === "f"
      ? `Displaying girl names only`
      : `Displaying boy names only`;
  return (
    <div>
      <fieldset>
        <legend>{genderType}</legend>

        <div className="radio-control">
          <input
            type="radio"
            name="Both"
            value="b"
            checked={props.gender === "b" ? true : false}
            onChange={props.handleOnchange}
          />
          <label htmlFor="Both">Both</label>
        </div>

        <div className="radio-control">
          <input
            type="radio"
            name="Male"
            value="m"
            checked={props.gender === "m" ? true : false}
            onChange={props.handleOnchange}
          />
          <label htmlFor="Male">Male</label>
        </div>

        <div className="radio-control">
          <input
            type="radio"
            name="Female"
            value="f"
            checked={props.gender === "f" ? true : false}
            onChange={props.handleOnchange}
          />
          <label htmlFor="Female">Female</label>
        </div>
      </fieldset>
    </div>
  );
};

export default GenderFilter;
