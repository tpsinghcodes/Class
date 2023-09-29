import fetchAndUpdateData from "../../../utils";
export const GET = async (request) => {
  //const { query, type, user } = await request.json();
  let url;
  url = "https://embarkation.online/a/tget";

  try {
    const response = await fetchAndUpdateData({
      url: url,
    });
    const res = await response;
    // const userData = response.json();
    //console.log("Api", response);
    //return response

    //console.log("At API", res);
    //
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
