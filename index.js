const person = {
    name: "John",
    walk() {
        console.log(this);
    }
};

person.walk();
