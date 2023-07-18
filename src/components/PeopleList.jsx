import { useEffect, useState } from 'react';
import api from '../api';

export default function PeopleList () {
  const [people, setPeople] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  
  useEffect(()=> {
    async function getPeople(){
      await api.get("people")
        .then(res => {
          const people = res.data;
          setPeople(people.results);
          setIsLoading(false)
        }).catch(err => {
          setError(err.code)
          setIsLoading(false)
        })
    }
    getPeople()
  },[])

  if(isLoading) return <div>is loading...</div>
  if(error) return <div>{error}</div>

  return <ul>{people?.map(el => <li key={el.url}>{el.name}</li>)}</ul>
}