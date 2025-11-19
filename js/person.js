export class person {
  constructor(firstName, lastName, age, isActive, hobbies, meta) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isActive = isActive;
    this.hobbies = hobbies;
    this.meta = meta;
  }

  getFullName() {
    // return "${this.firstName}";
    return this.firstName + " " + this.lastName;
  }

  getInfo() {
    // return (
    // //   this.age + " " + this.isActive + " " + this.hobbies + " " + this.meta
    // );
    let text = "Namn: " + this.getFullName() + " ";
    text += "ålder: " + this.age + " ";
    text += "Roll: " + this.meta.role + " ";
    return text;
  }
}
