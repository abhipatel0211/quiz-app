import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { setUserId } from "../redux/result_reducer";
import { useDispatch } from "react-redux";

const Selectlang = () => {
  // const inputRef = useRef(null);
  // const dispatch = useDispatch();
  // function startQuiz() {
  //   if (inputRef.current?.value) {
  //     dispatch(setUserId(inputRef.current?.value));
  //   }
  // }
  return (
    <div className="selectlang ">
      <h1>Click The language you want to learn</h1>
      <h2 className="lang">
        <Link to="/english">English</Link>
        <Link to="/hindi">Hindi</Link>
        <h2>Programming questions</h2>
        <Link to="/javascript">javascript</Link>
        <Link to="/cpp">C++</Link>
      </h2>
    </div>
  );
};

export default Selectlang;
