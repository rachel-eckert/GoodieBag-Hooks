// import React, { useEffect } from "react";
// import fetchSingleCandy from "../reducers/candySlice";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// const Candy = (props) => {
//   const candy = useSelector((state) => state.singleCandy);
//   console.log(candy);
//   const dispatch = useDispatch();
//   const params = useParams();
//   useEffect(() => {
//     dispatch(fetchSingleCandy(params.id));
//   }, [dispatch]);
//   // return (
//   //   <li>
//   //     <div>
//   //       <a href="#">
//   //         <img src={`/${candy.imageUrl}`} />
//   //       </a>
//   //     </div>
//   //     <div>
//   //       <p>{name}</p>
//   //       <p>{description}</p>
//   //       <p>{quantity}</p>
//   //     </div>
//   //   </li>
//   // );
// };

// export default Candy;
