import React, { useState } from "react";
import "./index.css";
import Words from "../words/index";
import Headline from "../headline/index";
import Footer from "../footer/index";

export default function Container(props) {
  const [wordOne, setWordOne] = useState();
  const [wordTwo, setWordTwo] = useState();

  const wordArrayOne = [
    "Holistic",
    "Advanced",
    "Approachable",
    "Cutting-Edge",
    "Sophisticated",
    "Modern",
    "Timeless",
    "Tasteful",
    "Minimalistic",
    "Characteristic",
    "Coherent"
  ];
  const wordArrayTwo = [
    "Appearance",
    "Expression",
    "Design",
    "Interior",
    "Form",
    "Shape",
    "Composition",
    "Layout",
    "Exterior",
    "Looks",
    "Style"
  ];

  const rnd = () => {
    return Math.floor(Math.random() * 10);
  };

  const genWord = (x, y) => {
    if (x) {
      const one = wordArrayOne[rnd()];
      if (one !== wordOne) {
        setWord(1, one);
      } else {
        genWord(true, false);
      }
    }
    if (y) {
      const two = wordArrayTwo[rnd()];
      if (two !== wordTwo) {
        setWord(2, two);
      } else {
        genWord(false, true);
      }
    }
  };

  const setWord = (selector, word) => {
    if (selector === 1) {
      setWordOne(word);
    }
    if (selector === 2) {
      setWordTwo(word);
    }
  };

  return (
    <div className="container">
      <div className="poster">
        <Headline />
        <Words props={wordOne} />
        <Words props={wordTwo} />
        <button onClick={() => genWord(true, true)}> Pitch Me!</button>
        <Footer />
      </div>
    </div>
  );
}
