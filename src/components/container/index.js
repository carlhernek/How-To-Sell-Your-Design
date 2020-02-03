import React, { useState } from "react";
import "./index.css";
import Words from "../words/index";

export default function Container(props) {
  const [wordOne, setWordOne] = useState();
  const [wordTwo, setWordTwo] = useState();

  const wordArrayOne = ["Timeless", "Minimalistic", "Artful"];
  const wordArrayTwo = ["Design", "Expression", "Form"];

  const rnd = function() {
    return Math.floor(Math.random() * 3);
  };
  const genWord = param => {
    setWordOne(wordArrayOne[rnd()]);
    setWordTwo(wordArrayTwo[rnd()]);
  };

  return (
    <div className="container">
      <Words props={wordOne} />
      <Words props={wordTwo} />
      <button onClick={() => genWord()}> button</button>
    </div>
  );
}
