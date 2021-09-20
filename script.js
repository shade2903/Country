
let Ebody = document.getElementById('body');
const LINK = 'https://restcountries.eu/rest/v2/all';

async function getCountries(link){
    Ebody.innerHTML="";
    const resp = await fetch (`${link}`);   
    const countries = await resp.json();  
    
 
    for (let count of countries){
        const img =document.createElement('img');
        const CardDiv = document.createElement('div');
        const Population = document.createElement('div');
        const Timezone = document.createElement('textarea');
        const Country = document.createElement('p');
        const Area = document.createElement('div');
        const Capital = document.createElement('div');
        const Btn = document.createElement('button')
        const Br = document.createElement('br')
        
        Ebody.appendChild(CardDiv);
              
        CardDiv.appendChild(Country);
        CardDiv.appendChild(img)
        CardDiv.appendChild(Capital);
        CardDiv.appendChild(Area); 
        CardDiv.appendChild(Population);        
        CardDiv.appendChild(Timezone);
        CardDiv.appendChild(Br);

        CardDiv.id = "cardDiv";
        Country.innerHTML = count.name;  
        Country.id = "countryName"
        Btn.id= "Button"
        Btn.textContent ="Open map";
        CardDiv.appendChild(Btn);
        var coordinates = 
        Btn.onclick = ()=>{
            window.open(`https://yandex.by/maps/?ll=${count.latlng[1]}%2C${count.latlng[0]}&z=6`);
           
        }

        img.id = "flag";
        img.src = count.flag;
        img.width = 150;
        img.height = 100;   
        
        
         
       Population.innerHTML = "Population: " + `${count.population}` +  " people";
       Area.innerHTML = "Area: " +`${count.area}` + " square km";
       Timezone.innerHTML = "TimeZone: " + count.timezones.reduce((p, v) => `${p} ${v}`) ;
       Timezone.style.resize = 'vertical';  
       Capital.innerHTML = "Capital: " + count.capital;
       console.log(count) 
       console.log(count.latlng[0])
   
       
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



