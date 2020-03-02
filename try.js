const date =  new Date();
console.log(date.toLocaleDateString())


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
  console.log(weekDayArr)

  console.log(weekDayArr.map(x=>(`${x}°`)))

const a = "hello,world"
console.log(a.split(" "))

//   axiosCallback(){
//     axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},${this.state.country}&appid=${API_KEY}&units=metric`)
//     .then((res) => {
//       const {list} = res.data
//       const tempArr = list.map((elem)=>`${elem.main.temp.toFixed(1)}°`).filter((elem,index)=>((index+1)%8===0||index===0))
//       const weatherArr = list.map((elem)=>elem.weather[0].main).filter((elem,index)=>((index+1)%8===0||index===0))
//       this.setState({
//         isLoading: false,
//         humidity: `${res.data.list[0].main.humidity}%`,
//         wind: `${res.data.list[0].wind.speed} K/M`,
//         tempArr: tempArr,
//         weatherArr: weatherArr,
//       })
//     })
//     .catch(err => {
//       console.log(err)
//     })