import useAxios from '../api/useAxios';
import PropTypes from 'prop-types';

export default function StarshipCard ({pathName}) {
  const [data, isLoading, error] = useAxios(pathName)

  if(isLoading) return <div>is loading...</div>
  if(error) return <div>{error}</div>

  return <p>{data?.name}</p>
}

StarshipCard.propTypes = {
  pathName: PropTypes.string
}