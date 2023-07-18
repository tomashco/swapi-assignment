import StarshipCard from '../components/StarshipCard'

function StarshipPage() {

  return (
    <>
    <h1>Starship Card</h1>
    <StarshipCard pathName={window.location.pathname}/>
    </>
  )
}

export default StarshipPage
