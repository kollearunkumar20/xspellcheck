import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const handleChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);

    if (inputText.trim() === "") {
      setSuggestion("");
      return;
    }

    // Split words by spaces or punctuation
    const words = inputText.split(/\s+/);

    // Find the first misspelled word (case-insensitive)
    let foundSuggestion = "";
    for (let word of words) {
      const lower = word.toLowerCase();
      if (customDictionary[lower]) {
        foundSuggestion = `Did you mean: ${customDictionary[lower]}?`;
        break;
      }
    }

    setSuggestion(foundSuggestion);
  };

  return (
    <div className="container">
      <h1 className="title">XSpellCheck</h1>
      <textarea
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
      />
      {suggestion && <p className="suggestion">{suggestion}</p>}
    </div>
  );
}

export default App;
