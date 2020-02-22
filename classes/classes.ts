class Student {
    fullName: string;
    constructor(public firstName:string, public middleInitial: string, public lastName:string){
        this.fullName = `${firstName} ${middleInitial}. ${lastName}`
    }
}

interface Person{
    firstName: string;
    lastName: string;

}

function greeter(person: Person){
    return "Hello " + person.firstName + " "+  person.lastName;
}
let new_user = new Student( "BRYCE", "A", "Soghigian")


document.body.textContent = greeter(new_user)