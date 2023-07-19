import GenericList from '../components/GenericList'
import Title from '../components/Title'
import PropTypes from 'prop-types'

function TablePage({pageTitle}) {
  return (
    <>
      <Title title={pageTitle} />
      <span className='m-6'/>
    <GenericList/>
    </>
  )
}

export default TablePage

TablePage.propTypes = {
  pageTitle: PropTypes.string
}


