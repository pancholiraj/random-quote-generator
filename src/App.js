import React, { useState, useEffect } from "react";
import styled from "styled-components";
import QuoteBox from "./components/QuoteBox";
import data from "./data/quote.json";
const App = () => {
  let [color, setColor] = useState();
  let [quote, setQuote] = useState();
  let [author, setAuthor] = useState();
  const randomData = () => {
    const dataLength = data.length;
    const randomNumber = Math.floor(Math.random() * dataLength);
    setColor(data[randomNumber].bgColor);
    setQuote(data[randomNumber].quote);
    setAuthor(data[randomNumber].writer);
  };

  useEffect(() => {
    randomData();
  }, []);

  return (
    <>
      <FullScreen color={color}>
        <QuoteBox
          randomData={randomData}
          color={color}
          quote={quote}
          author={author}
        />
      </FullScreen>
    </>
  );
};

const FullScreen = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default App;
