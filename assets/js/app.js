console.log("js loaded !");

let input=document.getElementById("txt_input");

let city=document.getElementById("city_name");
let country=document.getElementById("country_name");

input.addEventListener("keypress",e=>{
    if(e.key==="Enter"){
        console.log(input.value);
    }
})

fetch("http://api.weatherapi.com/v1/current.json?key=31a1523f2811458284d95942251611&q=menikdiwela&aqi=no")
.then(res => res.json())
.then(data => {
    // console.log(data);
    // console.log(data.location.name);
    // console.log(data.current.condition.text);

    city.innerText=data.location.name;
    country.innerText=data.location.region
});
