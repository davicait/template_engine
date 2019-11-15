const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school, title) {
        super(name, id, email, "Intern");
        this.school = school;
        this.title = title;
    }

    getSchool(school) {
        return this.school;
    }

    getTitle(title) {
        return "Intern";
    }
}

module.exports = Intern;