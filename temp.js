const API_KEY  = `9f4089fa6fa3924905b93feabc29ceda`;

const loadTemparature = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => showTemparature(data))
}
const showTemparature = data => {
    console.log(data.weather[0].main)
    setInnerTextById("temparature" , data.main.temp)
    setInnerTextById("condition" , data.weather[0].main)
}

const setInnerTextById = (id, text) => {
    const temp = document.getElementById(id);
    temp.innerText = text;
}

document.getElementById("search-btn").addEventListener("click" , function(){
    const inputField =  document.getElementById("input-field");
    const city = inputField.value;
    document.getElementById("city").innerText = city;
    
    loadTemparature(city);
    inputField.value=''
})


loadTemparature('barishal');
