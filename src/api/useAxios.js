import { useEffect, useState } from "react"
import api from "."

export default function useAxios(endpoint){

  const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
  
    useEffect(()=> {
      async function getData(){
        await api.get(endpoint)
          .then(res => {
            const data = res.data;
            setData(data.results);
            setIsLoading(false)
          }).catch(err => {
            setError(err.code)
            setIsLoading(false)
          })
      }
      getData()
    },[])

    return [data, isLoading, error]
}