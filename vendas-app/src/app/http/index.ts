import React from "react";
import Axios, { AxiosInstance } from "axios"

export const httpClient: AxiosInstance = Axios.create({
    baseURL: "http://localhost:3000/"
})