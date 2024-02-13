import React from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
// import data from '../../sfpopos-data.json'
import data from '../../sfpopos-data'
import { useState } from 'react'

function POPOSList() {
  const [ query, setQuery ] = useState('')
  // const spaces = data.map(( { title, address, images, hours }, i) => {
  const spaces = data.filter(obj => obj.title.toLowerCase().includes(query.toLowerCase()) || obj.address.toLowerCase().includes(query.toLowerCase()))
    .map(({ id, title, address, images, hours, features }, i) => {
    return (
      <POPOSSpace
        id={id}
        key={`${title}-${id}`}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    )
  })
  return (
    <div className="POPOSList">
      <form>
        <input
          value={query}
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      { spaces }
    </div>
  )
}

export default POPOSList
