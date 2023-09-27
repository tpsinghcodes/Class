"use client";
import React, { useEffect, useState } from "react";
import { createWebSocket } from "@/utils/connectws";

const WebSocketPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Create a WebSocket connection
    const io = createWebSocket();

    // Handle incoming messages from the WebSocket server
    io.on("message", (data) => {
      //console.log(data);
      setMessages((messages) => [...messages, data]);
    });

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      // Clean up the WebSocket connection when the component unmounts
      io.disconnect();
    };
  }, []);
  return (
    <div>
      <h1>WebSocket Real-Time Messages</h1>
      <ul>
        {/* {messages} */}
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default WebSocketPage;
