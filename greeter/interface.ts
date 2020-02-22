interface Person {
    firstName: string;
    lastName: string
}

function greeter(person: Person){
    return "Hello," +person.firstName + " " + person.lastName;

}

let user_first = { firstName: "Bryce", lastName: "Soghigian"};
document.body.textContent = greeter(user_first)