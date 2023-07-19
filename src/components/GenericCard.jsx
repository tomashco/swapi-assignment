import useAxios from '../api/useAxios';
import PropTypes from 'prop-types';

export default function GenericCard ({pathName}) {
  const [data, isLoading, error] = useAxios(pathName)

  if(isLoading) return <div>is loading...</div>
  if(error) return <div>{error}</div>
  return <>
    {Object.keys(data).map(el => typeof data[el] === "string" && <p key={el}><span className='font-bold'>{el.replaceAll('_', ' ')}: </span>{data[el]}</p>)}
  </>
}

GenericCard.propTypes = {
  pathName: PropTypes.string
}