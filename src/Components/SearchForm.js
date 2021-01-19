import React,{useState}from 'react'
import './SearchForm.scss'

const generateWeahtherName = (weather)=>{
    switch(weather){
      case 'Rain':
      return 'rainy'
      case 'Clouds':
      return 'cloudy'
      case 'Snow':
      return 'snowy'
      default:
      return 'sunny'
    }
  }

export default function SearchForm({handleSubmit,city,country,weather}) {
    const [inputValue,setInputValue] = useState("")
    const handleChange = (e)=>{
        setInputValue(e.target.value)
    }
  
    const handleKeyDown = (e)=>{
        if (e.key==="Enter"){
            setInputValue("")
            handleSubmit(inputValue)
        }
    }

    return (
            <div className={`search__weather weather ${generateWeahtherName(weather)}`}>
                <h2 className="search__location">{formatingString(city)},<span id="country-font">{formatingString(country)}</span></h2>
                <input type="search" value={inputValue} onChange={handleChange} placeholder="city country" onKeyDown={handleKeyDown}/>
            </div>
        
    )
}

const formatingString = (string)=>{
    return string.substring(0,1).toUpperCase() + string.substring(1,).toLowerCase()
}



