import React from "react";
import "./index.css";

export default function Words({ props }) {
  return (
    <div className="word-card">
      <h1>{props}</h1>
    </div>
  );
}
