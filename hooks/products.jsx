import { useEffect, useState } from "react";
import images from "../images/images.js";
import { useDispatch } from "react-redux";
import { error as stateError } from "./error";

import useSWR from "swr";

const fetcher = (...args) =>
  fetch(...args).then(async (response) => {
    const data = await response.json();

    if (!response.ok) {
      const error = new Error("An error occurred while fetching the data.");
      // Attach extra info to the error object.
      console.log("DATA", data);
      error.info = await data.msg;
      error.status = response.status;
      throw error;
    }

    return data;
  });

export function useProducts(id = null) {
  const dispatch = useDispatch();

  const url = "/api/products" + (id ? `/${id}` : "");
  console.log(url);
  const { data, error } = useSWR(url, fetcher);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch("/api/products");
  //       const data = await response.json();
  //       console.log("data", data);
  //       setProducts(data.result.data);
  //     };

  //     fetchData().catch((err) => console.log(err));
  //   }, []);

  if (error) {
    console.log("ERROR", error.status);
    dispatch(stateError({ status: true, code: error.status, msg: error.info }));
  }

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
