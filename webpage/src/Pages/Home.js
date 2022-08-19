import { useState, useEffect, CSSProperties } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../Styles/Home.css'
import axios from 'axios'
import CountryPreview from '../Components/CountryPreview'
import Navbar from '../Components/Navbar'
import ClipLoader from "react-spinners/ClipLoader";
import google from '../Assets/google.png'


const Home = () => {
  const [country, setCountry] = useState([])
  const [search, setSearch] = useState('')
  const [countryObj, setCountryObj] = useState({})
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const override: CSSProperties = {
    display: "block",
    marginInline: "auto",
    marginTop: '100px',
    marginRight: '650px',
    borderColor: "red",
    color: "#FFFFFF"
  };

  useEffect(() =>{
      axios.get('https://restcountries.com/v3.1/all').then((response) => {
        setCountry(response.data)
      })
      setLoading(true)
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
    <div style={{
      display: open ? "none" : 'block'
    }}>
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