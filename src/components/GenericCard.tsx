import { useQuery } from 'react-query';
import { swapiEntityFetch } from '../api';
import { ApiComponent } from '../utilities/interfaces/Api';
import axios from 'axios';

export default function GenericCard ({apiUrl}: ApiComponent) {
  const { isLoading, error, data } = useQuery(apiUrl, () => swapiEntityFetch(apiUrl));

  if(isLoading) return <div>is loading...</div>
  if (axios.isAxiosError(error)) return <div>{error.message}</div>
    
  return <>
    {data && Object.keys(data).map(el =>
      typeof data[el as keyof typeof data] === "string" &&
      <p key={el}>
        <span className='font-bold'>{el.replaceAll('_', ' ')}: </span>{data[el as keyof typeof data]}</p>)}
  </>
}