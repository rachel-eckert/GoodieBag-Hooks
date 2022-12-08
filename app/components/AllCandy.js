import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCandies } from "../reducers/candySlice";

const AllCandy = () => {
  const dispatch = useDispatch();
  const candies = useSelector((state) => state.candies);
  useEffect(() => {
    dispatch(fetchCandies());
  }, []);
  return (
    <div>
      <ul>
        {candies && candies.length
          ? candies.map((candy, idx) => {
              return (
                <div key={candy.id}>
                  <li>
                    <img src={candy.imageUrl} />
                    <h2>Candy {candy.name}</h2>
                    <p>Quantity: {candy.quantity}</p>
                    <p>{candy.description}</p>
                  </li>
                </div>
              );
            })
          : null}
      </ul>
    </div>
  );
};
export default AllCandy;
