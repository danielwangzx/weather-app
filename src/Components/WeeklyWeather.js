import React from 'react'
import "./bottomSection.scss"


export default function WeeklyWeather({renderWeekly,weatherArr,tempArr}) {
  
    // rearrange weekdayArr to suit current date
    const weekDayArr = (function rearrangeWeek(){
        const date = new Date()
        const index = date.getDay()
        const tempArr = ['MON','TUE','WED','THU','FRI','SAT','SUN'] 
         for (let i = 0; i< index-1; i++){
             const foo = tempArr.shift()
             tempArr.push(foo)
         }
         return tempArr.splice(1,5)
      })()
    
    return (
       <ul className="weather--weakly">
           {renderWeekly(weekDayArr,weatherArr,tempArr)}
       </ul>
    )
}

