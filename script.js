
let Ebody = document.getElementById('body');
const LINK = 'https://restcountries.eu/rest/v2/all';

async function getCountries(link){
    Ebody.innerHTML="";
    const resp = await fetch (`${link}`);   
    const countries = await resp.json();  
    
 
    for (let count of countries){
        const img =document.createElement('img');
        const CardDiv = document.createElement('div');
        CardDiv.id = "cardDiv";
        const Population = document.createElement('div');
        const Timezone = document.createElement('textarea');
        const Country = document.createElement('p');
        Country.id = "countryName"
        img.id = "flag";
        img.src = count.flag;
        img.width = 150;
        img.height = 100;
        Ebody.appendChild(CardDiv);
        Country.innerHTML = count.name;
        // console.log(count.name.length)
        CardDiv.appendChild(Country);
        CardDiv.appendChild(img)
        CardDiv.appendChild(Population)
        CardDiv.appendChild(Timezone)    
       Population.innerHTML = "population: " + `${count.population}` +  " people";
       
       Timezone.innerHTML = "TimeZone: " + count.timezones.reduce((p, v) => `${p} ${v}`) ;
       Timezone.style.resize = 'vertical';   
    //    if(count.name.length>20){
    //        Country.style.fontSize = "10pt";
    //    } else{
    //     Country.style.fontSize = "14pt";
    //    }              
       
    }
}
getCountries(LINK);

function buttonClick() {   

    if(document.getElementById('search').value==="")  {
        getCountries(LINK);
    } else{
        let link = `https://restcountries.eu/rest/v2/name/${document.getElementById('search').value}`
        getCountries(link);
    }    
   
  }
  function  clickPress(event) {
    if (event.keyCode == 13) {
        buttonClick();
    }
}
let str = "string";
console.log(str.length)


