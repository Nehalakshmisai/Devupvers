const users = [
    { name: "Neha", age: 25, role: "Developer" },
    { name: "Likhitha", age: 30, role: "Designer" },
    { name: "Sirisha", age: 22, role: "Developer" },
    { name: "Vaishnavi", age: 30, role: "Manager" }
];

const ageFiltered = users.filter(user => user.age > 25);
console.log("Users older than 25:", ageFiltered);

const nameFiltered = users.filter(user => user.name.startsWith("A"));
console.log("Users with name starting with A:", nameFiltered);

const userNames = users.map(user => user.name);
console.log("All user names:", userNames);

const totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log("Total age of all users:", totalAge);

users.forEach(user => {
    user.active = true;
});

console.log("Updated users with 'active' key:", users);
