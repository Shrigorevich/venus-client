import { Configuration } from "../shared/types/Configuration";
import { Error } from "../shared/types/Error";
import { LogoutFlow } from "../shared/types/identity/LogoutFlow";
import axios, { AxiosResponse } from "axios";

const baseUrl = "http://localhost:3999";

const api = axios.create({
  baseURL: "http://127.0.0.1:3999/api",
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

export const GetChallenges = async (): Promise<any> => {
  try {
    var response = await api.get("/challenges");
    console.log(response);
    return response.data;
  } catch (exception) {
    console.log("Unhandled exception: " + exception);
    return false;
  }
};

export const GetConfig = async (): Promise<Configuration> => {
  try {
    var response = await api.get<Configuration>("/configuration");
    return response.data;
  } catch (exception) {
    console.log("Unhandled exception: " + exception);
    return {
      currencies: [],
      units: [],
    };
  }
};
