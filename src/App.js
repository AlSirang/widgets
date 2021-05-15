import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

function App() {
  return <Search />; //<Accordion items={items} />;
}

export default App;
