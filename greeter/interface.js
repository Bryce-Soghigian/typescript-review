function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
var user_first = { firstName: "Bryce", lastName: "Soghigian" };
document.body.textContent = greeter(user_first);
