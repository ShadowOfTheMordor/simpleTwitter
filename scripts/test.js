
// document.addEventListener("DOMContentLoaded", () => {
//     const testLike = document.getElementById("test-like");

//     console.log(testLike);
// });

// const obj = {
//     firstname: "Maks",
//     surname: "Roschin"
// };

// const User = function(params) {
//     this.firstname = params.firstname;
//     this.surname = params.surname;
// };

// User.prototype.walk = function(steps) {
//     console.log(this.firstname + " прошел " + steps +" шагов.");
// };

// User.prototype.coding = function(time) {
//     console.log(this.surname + " писал код " + time + " часов");
// };

// const elon = new User({
//     firstname: "Elon",
//     surname: "Musk"
// });

// const maks = new User(obj);

// maks.walk(30);
// elon.walk(50);

// elon.coding(2);

class Character {
    constructor(params)
    {
        this.name = params.name;
        this.server = params.server;
        this.gender = params.gender;
    }

    walk()
    {
        console.log(this.name + " идет");
    }

    run()
    {
        console.log(this.name + " бежит");
    }
}

class Race extends Character{
    constructor(params)
    {
        super(params);
        this.race = params.race;
    }

    mainSkill()
    {
        console.log(this.name + " " + this.race + " использует супеспособность");
    }

    run() 
    {
        super.run();
        console.log(this.name + " точно бежит");
    }

};


class Class extends Race {
    constructor(params)
    {
        super(params);
        this.class = params.class;
        this.specialskills = this.getSpecialSkills();
    }

    getSpecialSkills()
    {
        
        if (this.class === "Warrior") {
            // return this.specialSkills = "Рассекающий удар мечом";
            return "Рассекающий удар мечом";
        }
        return "использует суперспособность";
    }
    classSkill()
    {
        console.log(`${this.race} ${this.name} ${this.class} использует ${this.specialskills}`);
    }
};




const warrior = new Class({
    name: "Maks",
    server: "main",
    gender: "male",
    race: "Orc",
    class: "Warrior"

});

const mage = new Class({
    name: "Elon",
    server: "main",
    gender: "male",
    race: "Human",
    class: "Mage"

});


console.log(warrior);

warrior.classSkill();

warrior.walk();

warrior.run();

mage.classSkill();