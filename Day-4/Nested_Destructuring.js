const user = {
    name: "Bob",
    address: {
        city: "Paris",
        country: "France"
    },
    hobbies: ["reading", "traveling"]
};
const {
    name,
    address: { city, country },
    hobbies: [firstHobby, secondHobby]
} = user;

console.log(name);       
console.log(city);       
console.log(country);    
console.log(firstHobby); 
console.log(secondHobby);
