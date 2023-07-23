import axios from 'axios';
import { FilmProps, PersonProps, PlanetProps, SpecieProps, StarshipProps, SwapiList, VehicleProps } from '../utilities/interfaces/Api';

export default function swApi() {
  return axios.create({
  baseURL: `https://swapi.dev/`
})}

export const swapiListFetch = (url: string): Promise<SwapiList> =>
  swApi().get(url).then((response) => response.data)

export const swapiEntityFetch = (url : string): Promise<PersonProps | StarshipProps | FilmProps | PlanetProps | SpecieProps | VehicleProps> =>
  swApi().get(url).then((response) => response.data)


export function getUrl(url: string){
  const urlObj = new URL(url)
  return urlObj.pathname
}
