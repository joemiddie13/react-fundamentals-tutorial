import React from 'react'
import { useParams } from 'react-router'
// import data from '../../sfpopos-data.json'
import data from '../../sfpopos-data'
import './POPOSDetails.css'
import POPOSFeatureList from '../Feature/POPOSFeatureList'

function POPOSDetails(props) {
  const params = useParams()
  const { id } = params
  const { images, title, desc, hours, features, geo } = data[id]

  return (
    <div className='POPOSDetails'>
      <div className='imageContainer'>
        <h1>{ title }</h1>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt={title} />
      </div>
      <div>
        <p>{ desc }</p>
        <p>{ hours }</p>
        <POPOSFeatureList features={features}/>
        <p>Latitude: { geo.lat } / Longitude: { geo.lon }</p>
      </div>
    </div>
  )
}

export default POPOSDetails