import { Link } from '@tanstack/router';
import useAxios from '../api/useAxios';
import {getUrl} from '../api'

export default function PeopleList () {
  const [data, isLoading, error] = useAxios('api/people')

  if(isLoading) return <div>is loading...</div>
  if(error) return <div>{error}</div>

  return <ul>{data?.results.map(el => <li key={el.url}><Link to={getUrl(el.url)} >{el.name}</Link></li>)}</ul>
}