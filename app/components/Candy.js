import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSingleCandy,
  selectSingleCandy,
} from "../reducers/singleCandySlice";

const Candy = () => {
  const { id } = useParams();

  const candy = useSelector(selectSingleCandy);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleCandy(id));
  }, [dispatch]);

  return (
    <div>
      <p>{candy.name}</p>
      <p>{candy.description}</p>
      <p>{candy.quantity}</p>
      <img src={candy.imageUrl} />
    </div>
  );
};

export default Candy;
