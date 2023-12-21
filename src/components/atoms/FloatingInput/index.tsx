"use client";
import { useState } from "react";
import style from "./index.module.scss";

const FloatingInput = (props: any) => {
  const { type, label } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [inputData, setInputData] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!inputData) {
      setIsFocused(false);
    }
  };

  return (
    <div
      className={`${style.floatingInputContainer} ${
        isFocused ? style.focused : ""
      }`}>
      <label>{label}</label>
      <input
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setInputData(e.target.value)}
      />
    </div>
  );
};

export default FloatingInput;
