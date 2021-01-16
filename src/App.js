import React, { Component } from 'react';
import './App.scss';
import LocalWeather from "./Components/LocalWearther"
import SearchForm from "./Components/SearchForm"
import WeeklyWeather from "./Components/WeeklyWeather"
import NewsFeed from "./Components/NewsFeed"
import axios from "axios"
import Clear from "./weathericons/Clear.svg"
import Rain from  "./weathericons/Rain.svg"
import Clouds from  "./weathericons/Clouds.svg"
import Snow from "./weathericons/Snow.svg"
import moment from 'moment-timezone'
const timeZone = moment.tz.guess().split('/')[1];


const API_KEY = "91cd15a3abc7eb94c05f1228dedaf747";

export default class App extends Component {
  state = {
    city: "",
    country: "",
    isLoading: true,
    date: new Date().toLocaleDateString(),
    tempArr: [],
    weatherArr:[],
    humidity: "",
    wind:""
  }

  componentDidMount(){
    this.setState({
      city: timeZone,
      country:"australia",
      isLoading:false,
    },this.axiosCallback
    )
  }

  handleSubmit = (inputValue) => {
    var result = inputValue.split(" ");
    if (!result[0]||!result[1]){
      alert("please put in city&country in corret format")
      return  
    }
    this.setState({
      city: result[0],
      country: result[1],
      isLoading: false,    
    },this.axiosCallback)  
  }

   async axiosCallback(){
     try {
      const weatherSync = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},${this.state.country}&appid=${API_KEY}&units=metric`)
      // const tweeterFeed = axios.get()
      const [res] = await Promise.all([weatherSync])
        const {list} = res.data
        const tempArr = list.map((elem)=>`${elem.main.temp.toFixed(1)}°`).filter((elem,index)=>((index+1)%8===0||index===0))
        const weatherArr = list.map((elem)=>elem.weather[0].main).filter((elem,index)=>((index+1)%8===0||index===0))
        this.setState({
          isLoading: false,
          humidity: `${res.data.list[0].main.humidity}%`,
          wind: `${res.data.list[0].wind.speed} K/M`,
          tempArr: tempArr,
          weatherArr: weatherArr,
        })
      
    }
    catch (err) {
      console.log(err)
    }
  }

  renderWeekly=(list,weatherArr,tempArr)=>{
   const generateWeahterIcon = (iconName)=>{
      switch(iconName){
        case 'Rain':
        return <img src={Rain} alt="Rainny icon"/>
        case 'Clouds':
        return <img src={Clouds} alt="Cloudy icon"/>
        case 'Snow':
        return <img src={Snow} alt="Snowy icon"/>
        default:
        return <img src={Clear} alt="Clear icon"/>
      }
    }
    return list.map((elem,index)=>(
      <li key={elem}>
        <div>{elem}</div>
       {generateWeahterIcon(weatherArr[index])}
        <div>{tempArr[index]}</div>
        <div>{weatherArr[index]}</div>
      </li>
    ))
  }
 
  render() {
    const {weatherArr,tempArr,humidity,wind,city,country} = this.state
    return (
      <div className="flex__layout">
        <div className="flex__layout__top">
            <LocalWeather temperature={tempArr[0]} weather={weatherArr[0]} humidity={humidity} wind={wind}/>
            <SearchForm handleSubmit={this.handleSubmit} city={city} country={country}/>  
        </div>
        <div className="flex__layout__bottom">
          <NewsFeed/>
          <WeeklyWeather renderWeekly={this.renderWeekly} weatherArr={weatherArr} tempArr={tempArr}/>
        </div>
      </div>
    )
  }
}


    




