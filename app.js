fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => {
    displayCountries(data)
}) 

const displayCountries = countries =>{
    const countriesDiv = document.getElementById('countries')
   for (let i = 0; i < countries.length; i++) {
       const country = countries[i];
       const countryDiv= document.createElement('div');
       countryDiv.className = "country";


       countryInfo = `
       <h1 class = "country-name">${country.name}</h1>
       <h6 class = "capital">${country.capital}</h6>
       <button onclick = "displayCountry('${country.name}')" class = "btn btn-primary">Details</buttom>
       
 `
 countryDiv.innerHTML = countryInfo;


       
    //    const h1 = document.createElement('h1');
    //    h1.innerText = country.name
    //    const h4 = document.createElement('h4');
    //    h4.innerText = country.capital
    //    countryDiv.appendChild(h1);
    //    countryDiv.appendChild(h4);
       countriesDiv.appendChild(countryDiv);

      }
        
    }

    const displayCountry = name =>{
        const url = `https://restcountries.eu/rest/v2/name/${name}`
        fetch(url)
        .then(res => res.json())
        .then(data => renderCountryDetails(data[0]))
    }
    const renderCountryDetails = country =>{
        const countryDetails = document.getElementById('country-details');
        countryDetails.innerHTML = 
        `<h1>Name : ${country.name}</h1>
        <h5>Capital : ${country.capital}</h5>
        <p>Region : ${country.region}</p>
        <p>Sub-Region : ${country.subregion}</p>
        
        <p>Population : ${country.population}</p>
        <p>Area : ${country.area}</p>
        <p>language : ${country.languages[0].name}</p>
        <p>Native-language : ${country.languages[0].nativeName}</p>
        <p>Time-Zone : ${country.timezones[0]}</p>
        <h6>Currency :Name : ${country.currencies[0].name} , Symbol: ${country.currencies[0].symbol}</h6>
        Flag : <img src = "${country.flag}">


        `

        console.log(country);
    }


