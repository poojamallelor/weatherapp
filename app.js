const apikey="9f14cc007c89c3c22fc2ebcaddfc6c34";
  const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric";
  const searchbox=document.querySelector(".search input");
  const searchbtn=document.querySelector(".search button");
  const wi=document.querySelector(".wi");
async function checkWeather(city) {
    const response = await fetch(`${apiURL}&q=${city}&appid=${apikey}`);

    var data=await response.json();
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
   
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }else{
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";
    if(data.weather[0].main=="Clouds"){
        wi.src="https://th.bing.com/th?id=OIP.3Y6H7Qlj4-tuGBxHoXcdxwHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2";
    }
    else{
        if(data.weather[0].main=="Clear"){
            wi.src="https://th.bing.com/th?id=OIP.957We5Hc5SV7yDsh4ckMGQHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2";
    
        }
        else{
            if(data.weather[0].main=="Rain"){
                wi.src="https://th.bing.com/th?id=OIP.9nQAJiyXyUz9OIBT6zZWBAHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2";
    
        
            }
        }
    }
    }
   
   
}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})




