export async function fetchAgents() {
  // // Set the required headers for the API request
  // const headers: HeadersInit = {
  //   "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
  //   "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  // };

  // Set the required headers for the API request
  const response = await fetch(`https://embarkation.online/a/tget`, {
    mode: "no-cors",
    cache: "no-store",
  });

  // Parse the response as JSON
  const result = await response.json();

  return result;
}
