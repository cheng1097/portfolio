import React from "react";

const Notification = ({ type, message }) => {
  return (
    <div
      style={{
        padding: "10px 20px",
        margin: "20px 0",
        borderRadius: "5px",
        color: type === "success" ? "green" : "red",
        backgroundColor: type === "success" ? "#d4edda" : "#f8d7da",
        border: `1px solid ${type === "success" ? "#c3e6cb" : "#f5c6cb"}`,
        textAlign: "center",
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
