
const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');


const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal == ""){
        city_name.innerText = 'Plz write the name before search';
    }else{
        try{
        let url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityVal+'&units=metric&appid=8a3ad2115d924eb2223eb34714cea6b4';
       const response = await fetch(url);
       const data = await response.json();
       const arrdata = [data];
       
       city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
       temp.innerText = arrdata[0].main.temp;
    //    temp_status.innerText = arrdata[0].weather[0].main;

       const tempMood =  arrdata[0].weather[0].main;
            

       if(tempMood == "Clear") {
        temp_status.innerHTML =
        "<i class='fas fa-sun' style='color:#eccc68;'></i>";
       } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
        "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
       } else if (tempMood == "Rain") {
        temp_status.innerHTML =
        "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
       } else {
        temp_status.innerHTML =
        "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
       } 

        }catch{
            city_name.innerText = 'Plz enter the city name properly';

        }
    }
}
 <script>
     
     
      const getcurrentDay = () => {
        let weekday = new Array(7);
         weekday[0] = "Sunday";
         weekday[1] = "Monday";
         weekday[2] = "Tuesday";
         weekday[3] = "Wednesday";
         weekday[4] = "Thursday";
         weekday[5] = "Friday";
         weekday[6] = "Saturday";
        let currentTime = new Date();
        days = weekday[currentTime.getDay()];
        let day = document.getElementById('day');
        day.innerText = days;
      }
      getcurrentDay();
    </script>


submitBtn.addEventListener('click', getInfo);
