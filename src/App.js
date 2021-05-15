import Accordion from "./components/Accordion";

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
  return <Accordion items={items} />;
}

export default App;
