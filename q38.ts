//Assignment Question # 39
// Cities: Write a function called city_country() that takes in the name of a city and it's country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and pint the value that's returned.

function city_country(cityName:string, countryName:string){
    return (`${cityName},${countryName}`);
}
console.log(city_country("Abbotabad","Pakistan"));
console.log(city_country("Dhaka","Bangladesh"));
console.log(city_country("Berlin","Germany"));
console.log(city_country("Zurich","Switzerland"));
console.log(city_country("Banglore","India"));
console.log(city_country("London","United Kingdom"));
console.log(city_country("NewYork","USA"));
