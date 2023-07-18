import useAxios from '../api/useAxios';

export default function PeopleList () {
  const [data, isLoading, error] = useAxios('people')

  if(isLoading) return <div>is loading...</div>
  if(error) return <div>{error}</div>

  return <ul>{data?.map(el => <li key={el.url}>{el.name}</li>)}</ul>
}