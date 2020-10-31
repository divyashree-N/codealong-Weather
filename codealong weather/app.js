var apikey = "6509c5bc179a3746c32ca47d253a6d63"
var msg = document.getElementById("msg");

function getData(){
    var input = document.getElementById("City").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("p1").innerHTML = "Temp : "+data.main.temp;
        document.getElementById("p2").innerHTML = "Temp : "+data.name;
        var icon = "https://api.openweathermap.org/img/w/"+data.weather[0].icon+".png";
        document.getElementById("icon").src = icon;

    })
    .catch(() => {
        msg.textContent = "Please search for a valid city";
    });
}