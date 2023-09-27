"use client";
import io from "socket.io-client";

export function createWebSocket() {
  return io("http://localhost:3009");
}
