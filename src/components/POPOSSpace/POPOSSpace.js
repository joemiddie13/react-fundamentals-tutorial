import './POPOSSpace.css'
import { Link } from 'react-router-dom'

function POPOSSpace({name, image, address, hours, id}) {
  return (
    <div className="POPOSSpace">
      <h1>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`} 
          width="300" 
          height="300" 
          alt={name} 
        />
      </Link>
      <div>{address}</div>
      <div className="hours">{hours}</div>
    </div>
  )
}

export default POPOSSpace