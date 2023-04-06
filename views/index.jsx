import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!inputValue) {
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
    };

    setMessages([...messages, newMessage]);

    // Clear input field
    setInputValue("");
  }

  return (
    <div className="container">
      <h1>Customer Service Chatbot</h1>

      {messages.map((message) => (
        <div
          key={message.id}
          className={`message-container ${message.isUser ? "user" : "bot"}`}
        >
          <div className="message">{message.text}</div>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message here..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
