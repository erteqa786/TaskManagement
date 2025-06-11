import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_APP_BASE_URL;
// const API_URL = "http://localhost:8800/api";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL + "/api",
  credentials: "include", // ✅ Send cookies with requests
});


export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});