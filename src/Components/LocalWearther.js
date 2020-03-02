import React from 'react'
import './topSection.scss'

const LocalWeather = React.memo(({temperature,weather,wind,humidity})=>{
return (
    <div className="local__weather">
        <div className="local__weather--top">
                <h1 className="font__weather">{temperature}</h1>
                <div>{weather}</div>
        </div>
        <div className="local__weather--bottom">
            <div className="local__weather__bottom--left">
                <div className="local__weather__font">HUMIDITY</div>
                <div className="local__weather__font">{humidity}</div>
            </div>
            <div className="local__weather__bottom--right">
                <div className="local__weather__font">WIND</div>
                <div className="local__weather__font">{wind}</div>
            </div>
        </div>
    </div>
)
})

export default LocalWeather
