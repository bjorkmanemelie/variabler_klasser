import { person } from "./person.js";


const person1 = new person("Olivia", "Mach", 22, true, ["baka"], {role: "student", country: "Sweden"});
const person2 = new person("Emelie", "Bjorkman", 25, true, ["laga mat"], {role: "student", country: "Sweden"});

console.log(person);
console.log(person1.getFullName());
console.log(person1.getInfo());

