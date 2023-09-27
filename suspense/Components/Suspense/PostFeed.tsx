"use client";
import React from "react";

const PostFeed = () => {
  const PostFeed = new Promise<string>((res) =>
    setTimeout(() => res("Post Feed is loaded"), 5000)
  );
  return <div>{PostFeed}</div>;
};

export default PostFeed;
