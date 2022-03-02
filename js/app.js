// call weather api id
const api_Key = `03369ff04786856c4012160a0c7933b9`;
// search temperature from ui and set api
const searchTempareture = () => {
   const city = document.getElementById('city-name').value;
//    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${city}&appid=${api_Key}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}&units=metric`;
    // console.log(url);
   fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
    
    
}
//set all text in ui
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
//display in ui
const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText("temperature", temperature.main.temp);
    setInnerText("condition", temperature.weather[0].main);
    //set tempereture icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('icon');
    imgIcon.setAttribute('src', url);
    console.log(temperature);
}