import React from "react";
import styled from "styled-components";
import { FaQuoteLeft } from "react-icons/fa";
import "../quoteBox.css";
const QuoteBox = ({ quote, color, author, randomData }) => {
  return (
    <WhiteBox>
      <InsideBox color={color}>
        <Quote>
          <FaQuoteLeft className="quoteSpacing" />
          {quote}
        </Quote>
        <Author>{author}</Author>
        <Button onClick={randomData} color={color}>
          Next Quote
        </Button>
      </InsideBox>
    </WhiteBox>
  );
};

const WhiteBox = styled.div`
  background-color: white;
  width: 30%;
  text-align: center;
  border-radius: 8px;
`;

const InsideBox = styled.div`
  padding: 25px;
  color: ${(props) => props.color};
`;

const Quote = styled.div`
  margin-bottom: 20px;
  font-size: 25px;
`;

const Author = styled.div`
  text-align: end;
`;

const Button = styled.button`
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  margin-top: 25px;
`;

export default QuoteBox;
