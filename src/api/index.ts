import axios from 'axios';

export default axios.create({
  baseURL: `https://swapi.dev/`
});

export function getUrl(url: string){
  const urlObj = new URL(url)
  return urlObj.pathname
}
