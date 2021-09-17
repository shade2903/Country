async function getCountries(){
    const resp = await fetch ('https://restcountries.eu/rest/v2/all');
    const countries = await resp.json();  
 
    for (let count of countries){
        const img =document.createElement('img');
        const CardDiv = document.createElement('div');
        CardDiv.id = "cardDiv";
        const Population = document.createElement('div');
        const Timezone = document.createElement('textarea');
        const Country = document.createElement('p');
        Country.id = ""
        img.src = count.flag + "";
        img.width = 150;
        img.height = 100;
        document.body.appendChild(CardDiv);
        Country.innerHTML = count.name;
        CardDiv.appendChild(Country);
        CardDiv.appendChild(img)
        CardDiv.appendChild(Population)
        CardDiv.appendChild(Timezone)
    //     var card = document.getElementById("cardDiv");
    //    card.appendChild(img);
        // document.body.appendChild(img);
       Population.innerHTML = "population: " + `${count.population}` +  " people";
       
       Timezone.innerHTML = "TimeZone: " + count.timezones ;
           
       
       
       
    }
}
getCountries();

