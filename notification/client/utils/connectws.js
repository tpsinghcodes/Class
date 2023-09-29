"use client";
import io from "socket.io-client";

export function createWebSocket() {
  return io("http://45.147.228.67:1179");
}
