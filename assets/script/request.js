'use strict';

import { select, print } from'./utils.js';

//don use
import info from './cities.js';

print(info.cities);

const url = './assets/script/cities.json';
const list = select('section');

function listCities(array) {
    list.innerHTML = '';
    let cities = '';

    if ( array.length > 0) {
        array.forEach(city => {
            cities += `<li> ${city.name} </li>`;
            
        });
    } else {
        cities = `<li> cities not found </li>`;
    }

    list.innerHTML = `<li> ${cities} </li>`;
}

//fetch function 
const options = {
    method:'GET',
    Headers:{ 'Content-Type': 'application/json; charset=UTF-8'},
    mode: 'cors'
}

async function getCities() {
    try {
        const response = await fetch(url, options);//promise
        if (!response.ok) {
            throw new Error(`${response.statusText} (${response.status})`);
        }
        const data = await response.json();
        print(data.cities);
    } catch(error) {
        print(error.message);
    }
}

getCities();
listCities();