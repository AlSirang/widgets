import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Header from "./components/Header";
import Route from "./components/Route";

import { useState } from "react";

const items = [
  {
    title: "What is React?",
    content: "React is font-end library for UI development.",
  },
  {
    title: "Who developemt React?",
    content: "It is developmented and maintiaitbe by Facebook.",
  },
  {
    title: "Is React Open source?",
    content: "Yes, React is open source library",
  },
];

const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Blue",
    value: "blue",
  },
  {
    label: "Green",
    value: "green",
  },
];
function App() {
  const [selectedColor, setSelectedColor] = useState(options[0]);
  return (
    <>
      <Header />
      <div className="ui container">
        <Route pathname="/">
          <Accordion items={items} />
        </Route>
        <Route pathname="/wikiSearch">
          <Search />
        </Route>
        <Route pathname="/dropdown">
          <Dropdown
            options={options}
            label="Select a Color"
            selected={selectedColor}
            onSelectedChange={setSelectedColor}
          />
        </Route>
        <Route pathname="/translate">
          <Translate />
        </Route>
      </div>
    </>
  );
}

export default App;
