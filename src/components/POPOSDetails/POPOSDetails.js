import React from 'react'
import { useParams } from 'react-router'
import data from '../../sfpopos-data.json'

function POPOSDetails(props) {
  const params = useParams()
  const { id } = params
  const { images, title, desc, hours, features, geo } = data[id]

  return (
    <div>
      <h1>{ title }</h1>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt={title} />
      </div>
      <div>
        <p>{ desc }</p>
        <p>{ hours }</p>
        <p>{ features }</p>
        <p>{ geo.lat } { geo.lon }</p>
      </div>
    </div>
  )
}

export default POPOSDetails