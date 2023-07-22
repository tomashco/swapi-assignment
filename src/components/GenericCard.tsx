import useAxios from '../api/useAxios';
import { ApiComponent, FilmProps, PersonProps, PlanetProps, SpecieProps, StarshipProps, VehicleProps } from '../utilities/interfaces/Api';

export default function GenericCard ({apiUrl}: ApiComponent) {
  const [data, isLoading, error] = useAxios(apiUrl) as [VehicleProps | SpecieProps | PlanetProps | FilmProps | StarshipProps | PersonProps, boolean, string]

  if(isLoading) return <div>is loading...</div>
  if(error) return <div>{error}</div>
  return <>
    {Object.keys(data).map(el => typeof data[el as keyof typeof data] === "string" && <p key={el}><span className='font-bold'>{el.replaceAll('_', ' ')}: </span>{data[el as keyof typeof data]}</p>)}
  </>
}