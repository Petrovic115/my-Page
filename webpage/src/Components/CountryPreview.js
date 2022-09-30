import {useState, useEffect} from 'react'
import google from '../Assets/google.png'
import close from '../Assets/close.svg'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const CountryPreview = () => {
  const navigate = useNavigate()
  const {name} = useParams()
  const [country, setCountry] = useState([])


  useEffect(() =>{
      axios.get(`https://restcountries.com/v3.1/name/${name}`).then((response) => {
        setCountry(response.data)
      })
    },[])

  const closePop = () => {
     navigate('/test')
  }
 
  return (
    <>
    {country.map((item, i) => (
      <div key={i}>
        <img className='close' src={close} alt="" onClick={closePop} />
          <div className='country-holder containerNew'>
          <img className='imgNew' src={item.coatOfArms.svg} alt="" /> 
          <div className='border'>
          <div className='flex'>
            <h1>Country:</h1>
            <h1>{item.name.common}</h1>
          </div>
          <div className='flex'>
            <h2>Capital:</h2>
            <h2>{item.capital}</h2>
          </div>
          <a href={item.maps.googleMaps} target='_blank'>
            <img className='google' src={google} alt="" />
          </a>
          <div className='flex'>
            <h3>Population:</h3>
            <h3><span>{item.population}</span></h3>
          </div>
          </div>
          </div>
      </div>
    ))}
    </>
  )
}

export default CountryPreview