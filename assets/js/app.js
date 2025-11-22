console.log("js loaded !");

let apiKey="31a1523f2811458284d95942251611";
let input=document.getElementById("txt_input");

input.addEventListener("keypress",e=>{
    if(e.key==="Enter"){
        apiCallCurrent(input.value);
        apiCallAstronomy(input.value);
    }
})

let apiCallCurrent=(cityInput)=>{
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}&aqi=no`)
    .then(res => res.json())
    .then(data => {
        setCurrentDetails(data);
    });
}

let apiCallAstronomy=(cityInput)=>{
    fetch(`http://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=${cityInput}&dt=2025-11-22`)
    .then(res => res.json())
    .then(data => {
        setAstronomyDetails(data);
    });
}

function setCurrentDetails(data){
    main_status_image.src=data.current.condition.icon;

    
    let city=document.getElementById("city_name");
    let country=document.getElementById("country_name");
    let mainTemparature=document.getElementById("main_temparature");
    let subMainTemparature=document.getElementById("sub_main_temparature");
    let temparatureFeelLike=document.getElementById("temparature_feel_like")
    let status=document.getElementById("status");
    let date=document.getElementById("date");

    city.innerText=data.location.name;
    country.innerText=data.location.country;
    mainTemparature.innerText=data.current.temp_c+" ℃";
    subMainTemparature.innerText=data.current.temp_c+" ℃";
    temparatureFeelLike.innerText=data.current.feelslike_c+" ℃";
    status.innerText=data.current.condition.text;
    date.innerText=data.location.localtime;
    
    
    let windSpeed=document.getElementById("wind_speed_value");
    let humidity=document.getElementById("humidity_value");
    let cloudCover=document.getElementById("cloud_cover_value");
    let uvIndex=document.getElementById("uv_index_value");
    let pressure=document.getElementById("pressure_value");
    let visibility=document.getElementById("visibility_value");

    windSpeed.innerText=data.current.wind_kph+" km/h";
    humidity.innerText=data.current.humidity+" %";
    cloudCover.innerText=data.current.cloud+" %";
    uvIndex.innerText=data.current.uv+"(Low)";
    pressure.innerText=data.current.pressure_mb+" hPa";
    visibility.innerText=data.current.vis_km+" km";

}

function setAstronomyDetails(data){
    let sunRiseTime=document.getElementById("sun_rise_time");
    let sunSetTime=document.getElementById("sun_set_time");

    sunRiseTime.innerText=data.astronomy.astro.sunrise;
    sunSetTime.innerText=data.astronomy.astro.sunset;
}


