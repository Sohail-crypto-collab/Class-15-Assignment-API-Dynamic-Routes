import React from "react";

//dynamic
const GetData = async (url: string) => {
  const fetchData = await fetch(url);
  const responce = await fetchData.json();
  return responce;
};

export default GetData;
