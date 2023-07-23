import axios from 'axios';
import { SwapiEntitySchema, SwapiListSchema } from '../utilities/schema';

export default function swApi() {
  return axios.create({
  baseURL: `https://swapi.dev/`
})}

export const swapiListFetch = (url: string) =>
  swApi().get(url).then((response) => SwapiListSchema.parse(response.data))

export const swapiEntityFetch = (url : string) =>
  swApi().get(url).then((response) => SwapiEntitySchema.parse(response.data))


export function getUrl(url: string){
  const urlObj = new URL(url)
  return urlObj.pathname
}
