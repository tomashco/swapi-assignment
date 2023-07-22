import { useState } from 'react'
import GenericList from '../components/GenericList'
import Title from '../components/Title'
import { TextField } from '@mui/material'
import React from 'react'
import { PageProps } from '../utilities/interfaces/Page'

function TablePage({ pageTitle }: PageProps) {
  const baseUrl = window.location.pathname
  const [pathName, setPathName] = useState(baseUrl)
  const [search, setSearch] = useState('')

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(evt.target.value)
  }
  const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
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
      <GenericList apiUrl={pathName} />
    </>
  )
}

export default TablePage

