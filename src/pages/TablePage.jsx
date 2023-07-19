import { useState } from 'react'
import GenericList from '../components/GenericList'
import Title from '../components/Title'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'

function TablePage({ pageTitle }) {
  const baseUrl = window.location.pathname
  const [pathName, setPathName] = useState(baseUrl)
  const [search, setSearch] = useState('')

  const handleChange = (evt) => {
    setSearch(evt.target.value)
  }
  const handleKeyDown = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      setPathName(search ? `${baseUrl}/?search=${search}` : baseUrl)
      setSearch('')
    }
  }

  return (
    <>
      <div className='flex justify-between'>

      <Title title={pageTitle} />
      <TextField id="outlined-basic" value={search}
  onChange={handleChange} onKeyDown={handleKeyDown} label="Search" variant="outlined" />
      </div>
      <span className='m-6'/>
      <GenericList baseUrl={pathName} />
    </>
  )
}

export default TablePage

TablePage.propTypes = {
  pageTitle: PropTypes.string
}


