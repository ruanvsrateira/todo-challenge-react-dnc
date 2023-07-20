import React from "react";
import "./index.scss";

export const Input = ({ placeholder, type, value, onChange }) => {
  if (type == "checkbox") {
    return (
      <div className="input-checkbox-container">
        <p>{placeholder}</p>
        <input type="checkbox" value={value} onChange={onChange} />
      </div>
    );
  }

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
