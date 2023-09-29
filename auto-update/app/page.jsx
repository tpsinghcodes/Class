import Static from "../components/Static";
import Image from "next/image";
import Five from "../components/Five";
async function getData() {
  const response = await fetch("https://embarkation.online/a/tget", {
    cache: "no-store",
    mode: "no-cors",
  });
  // Parse the response as JSON

  const result = await response.json();
  console.log("Result", result);
  // const res = await fetch("https://embarkation.online/a/tget", {
  //   method: "GET",
  //   mode: "no-cors",
  //   // headers: {
  //   //   "X-RapidAPI-Key": "your-rapidapi-key",
  //   //   "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
  //   // },
  // });
  // const data = await res.json();
  // console.log(data);

  // const res = await fetch("https://embarkation.online/a/tget");
  // // The return value is *not* serialized
  // // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

  // return res.json();
}
export default async function Home() {
  // const data = await getData();
  // console.log("Data", data);
  return (
    <div>
      <a href="/about">Abot</a>
      <div>
        <Static />
        <Five />
      </div>
    </div>
  );
}
