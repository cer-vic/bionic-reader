import "./App.css";

const text = `
Bionic Reading is a new method facilitating the reading process by guiding
the eyes through text with artificial fixation points. As a result, the
reader is only focusing on the highlighted initial letters and lets the
brain center complete the word. In a digital world dominated by shallow
forms of reading, Bionic Reading aims to encourage a more in-depth reading
and understanding of written content.
`;

function bionify(word) {
  if (word.length === 1) {
    return word;
  }

  const numBold = Math.ceil(word.length * 0.4);

  return (
    <>
      {" "}
      <b>{word.slice(0, numBold)}</b>
      <span>{word.slice(numBold)}</span>{" "}
    </>
  );
}

function App() {
  return <p>{text.split(" ").map(bionify)}</p>;
}

export default App;
