import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ENV } from "config";

export const baseQuery = fetchBaseQuery({
  baseUrl: ENV.API_URL + "/api/v1",
  prepareHeaders: (headers) => {
    const userStr = localStorage.getItem("user");
    let user;
    try {
      user = JSON.parse(userStr + "");
    } catch {
      console.log("incorrect user");
    }

    if (user?.token) headers.set("Authorization", `Bearer ${user.token}`);
    return headers;
  },
});
