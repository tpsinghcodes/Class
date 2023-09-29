import React from "react";
import { fetchAgents } from "@/utils";
const AutoResponse = async () => {
  const details = async () => {
    const allAgenets = await fetchAgents();
    // return allAgenets;
    console.log(allAgenets);
  };

  details();
  // const intervalId = setInterval(() => {
  //   details();
  // }, 5000);

  //let promise = new Promise(function (resolve, reject) {
  //   setTimeout(fetchAgents, 5000);
  // });
  // promise.then((value) => {
  //   console.log(value);
  // });

  // let re = new Promise((resolve) => setTimeout(fetchAgents, 5000));
  // re.then((v) => {
  //   console.log(v);
  // });

  // Clean up the interval when the component unmounts
  // clearInterval(intervalId);

  // const details = async () => {
  //   const allAgenets = await fetchAgents();
  //   console.log("All Agents", allAgenets);
  // };

  function myFunction() {
    console.log("Hello World!");
  }
  setInterval(details, 5000);
  // // useEffect(() => {});
  // let intervalId = setInterval(details, 5000);
  // clearInterval(intervalId);
  // return new Promise((resolve) => setTimeout(details, 5000));
  return <div>AutoResponse</div>;
};

export default AutoResponse;
