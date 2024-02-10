import './POPOSSpace.css'

function POPOSSpace({name, image, address, hours}) {
  return (
    <div className="POPOSSpace">
      <h1>{name}</h1>
      <img src={`${process.env.PUBLIC_URL}/images/${image}`} 
        width="300" 
        height="300" 
        alt={name} 
      />      
      <div>{address}</div>
      <div className="hours">{hours}</div>
    </div>
  )
}

export default POPOSSpace