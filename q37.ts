//Assignment Question # 38
// Cities: Write a function called describe_city() that accepts the name of a city and it's country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(cityname:string , countryname: string = " default country"): void{
    console.log(`${cityname} is in ${countryname}`);
};
describe_city("Lahore", "Pakistan");
describe_city("Islamabad", "Pakistan");
describe_city("Toronto");
