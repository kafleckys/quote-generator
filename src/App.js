import "./App.css";
import React, { useState } from "react";
import { TwitterShareButton, WhatsappShareButton } from "react-share";

const App = () => {
  const shareUrl = "https://twitter.com";//place actual url here to share quotes
  const shareUrl1 = "https://whatsapp.com";//this is the place of actual url


  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div className="sharebtns">
          <div className="share">
            <TwitterShareButton url={shareUrl} title={quote}>
              Share on Twitter
            </TwitterShareButton>
          </div>

          <div className="share">
            <WhatsappShareButton url={shareUrl1} title={quote}>
              Share on WhatsApp
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
