
const API_KEY = "9c7528eae34ace02e16782c2017378e3";

function geoSuccess(position) {
    const lat = position.coords.latitude;  //위도 37.1314069
    const log = position.coords.longitude;  //경도 126.9040523
    //console.log(`lat = ${lat}, log=${log}`);
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    //my api key 9c7528eae34ace02e16782c2017378e3
    //units=metric  화씨 -> 섭씨
    //console.log(URL);
    fetch(URL)
        .then(response => response.json())
        .then(data => {
                console.log(data);
                const weather = document.getElementById("weather");
                const city = document.getElementById("city");
            
                weather.innerText = data.weather[0].main; 
                city.innerText = data.name;
    }); 
    //js에서 url 열어줌 : fetch(request 로서 서버의 반응을 기다려야함 ->then 필요성성)
    //response를 json형식으로 받아서 data extract 하기기
}
function geoError() {
    alert("Sorry, I can not find where you are.");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);