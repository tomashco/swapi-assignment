import GenericCard from "../components/GenericCard"
import Title from "../components/Title"
import PropTypes from 'prop-types'

export default function SingleViewPage({pageTitle}) {

  return (
    <>
      <Title title={pageTitle}/>
      <span className='m-6'/>
    <GenericCard pathName={window.location.pathname}/>
    </>
  )
}

SingleViewPage.propTypes = {
  pageTitle: PropTypes.string
}
