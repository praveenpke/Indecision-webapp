class Person {
    constructor(name = 'Anonymous',age=0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi. I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old`;
    }
}

const me = new Person('Andrew Mead');

console.log(me);


class Student extends Person{
    constructor(name, age, major){
        super(name, age);

        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        return description;
    }


}