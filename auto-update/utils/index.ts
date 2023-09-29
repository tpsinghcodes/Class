export default async function fetchAndUpdateData({ url }) {
  const response = await fetch(url, {
    cache: "no-store",
    mode: "no-cors",
  });
  // Parse the response as JSON

  const result = await response.json();

  // console.log("Result Fetch", result);
  return result;
}
