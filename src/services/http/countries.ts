import axios from "axios";
import { Country } from "../../types";

const URL: string = "https://restcountries.com/v2";

export const getCountries = (): Promise<Country[]> => {
  return axios.get(`${URL}/all`);
};

export const getCountryByName = (name: string): Promise<Country[]> => {
  return axios.get(`${URL}/name/${name}`);
};
