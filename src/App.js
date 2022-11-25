import "./styles.css";
import React, { useState } from "react";

var animalDictionary = {
  "🐵": "Monkey Face",
  "🦍": "Gorilla",
  "🐕": "Dog",
  "🐈": "Cat",
  "🦁": "Lion",
  "🐄": "Cow"
};

var animals = Object.keys(animalDictionary);

export default function App() {
  var [text, setText] = useState("Known Animals");

  function inputHandler(event) {
    var animal = animalDictionary[event.target.value];
    if (animal === undefined) {
      setText("This does not exist in our database :(");
    } else {
      setText(animal);
    }
  }

  function clickHandler(item) {
    setText(animalDictionary[item]);
  }

  return (
    <div className="App">
      <h1>Animal Interpreter</h1>
      <input
        onChange={inputHandler}
        placeholder="Enter any animal emoji"
        style={{
          width: "70%"
        }}
      />
      <h3>{text}</h3>
      {animals.map((item) => (
        <span
          key={item}
          onClick={() => clickHandler(item)}
          style={{
            cursor: "pointer",
            padding: "0rem 1rem"
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
