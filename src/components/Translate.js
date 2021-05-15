import { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Urdu",
    value: "ur",
  },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]),
    [text, setText] = useState("");
  return (
    <>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />

      <h2>Output</h2>
      <Convert text={text} language={language} />
    </>
  );
};

export default Translate;
