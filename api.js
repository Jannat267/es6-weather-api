const loadTemp=()=>{
    const cityField=document.getElementById("cityInput");
    const cityInput=cityField.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=768f053aa3dec543931a59371e4c7997`)
    .then(res=> res.json())
    .then(data=>displayTemp(data))
}

const displayTemp=(data)=>{
    const cityField=document.getElementById("cityInput");
    cityField.value='';
    const displayCity=document.getElementById("cityName");
    displayCity.innerText =data.name;
    // displayCity.innerText='';
    const displayTemp=document.getElementById("displayTemp");
    // displayTemp.textContent='';
    displayTemp.innerText =parseFloat(data.main.temp - 273.15).toFixed(2) ;
    const weather=document.getElementById("weather");
    weather.innerText =data.weather[0].main;
     
}
