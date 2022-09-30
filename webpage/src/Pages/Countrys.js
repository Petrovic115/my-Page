import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Country.css'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import google from '../Assets/google.png'


const Home = () => {
  const [country, setCountry] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() =>{
      axios.get('https://restcountries.com/v3.1/all').then((response) => {
        setCountry(response.data)
      })
  },[])


  const searchCountry = (e) => {
    e.preventDefault()
    axios.get(`https://restcountries.com/v3.1/name/${search}`).then((response) => {
      setCountry(response.data)
    })
    
  }

  return ( 
    <>
    <Navbar />
    <div>
    <div className='searchInput'>
      <form onSubmit={e => searchCountry(e)}>
        <input type="text" name='search' placeholder='Search...' autoComplete='off' value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className='srchBtn' type='submit' >Search Country</button>
      </form>
    </div>
    <div className='container hold'>
      {country.map((item, i)=> (
        <div className='country-holder' key={i} >
          <Link to={`/country/${item.name.common}`}>
            <img className='img' src={item.flags.png} alt=""/> 
          </Link>
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
      ))}
    </div>
    </div>
    </>
  )
}

export default Home