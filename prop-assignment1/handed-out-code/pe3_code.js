console.log("hello world");

var person = {

    firstName: 'Brendan',
    lastName: 'Eich',

    get fullName() {
	return this.firstName + ' ' + this.lastName;
    },

    set fullName(name) {
	var words = name.toString().split(' ');
	this.firstName = words[0] || '';
	this.lastName = words[1] || '';
    }
};

console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);

person.fullName = 'Eich Brendan';

console.log(person.fullName);
console.log(person.firstName);

function Person(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, "fullName", {
	get : function() {
	    return this.firstName + ' ' + this.lastName;
	},
	set : function(name) {
	    var words = name.toString().split(' ');
	    this.firstName = words[0] || '';
	    this.lastName = words[1] || '';
	},
    });
};

p = new Person("Alan", "Kay");

console.log(p.fullName);
console.log(p.firstName);
console.log(p.lastName);

p.fullName = "nalA yaK";

console.log(p.fullName);
console.log(p.firstName);
console.log(p.lastName);
