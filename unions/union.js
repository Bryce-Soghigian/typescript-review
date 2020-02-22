var val;
val = 13;
console.log("numeric value of val " + val);
val = "THIS IS A STRING";
console.log("string value of val " + val);
function disp(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
disp("mark");
console.log("Printing names array....");
disp(["Mark", "Tom", "Mary", "John"]);
