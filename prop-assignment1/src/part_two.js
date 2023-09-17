// Assignment 1, Part 2
// Jameel Saeed (JASA6359)
// Rasmus Rodriguez (RAER3426)

function createClass(className, superClassList) {
    let newClass = {};
    newClass.name = className;
    newClass.superClasses = [];

    newClass.hasSuperClass = function (superClass) {
        let found = false;
        for (let i = 0; i < this.superClasses.length; i++) {
            if (this.superClasses[i] === superClass) {
                found = true;
                break;
            }
        }
        return found;
    };

    newClass.addSuperClass = function (superClass) {
        if (!superClass.hasSuperClass(this))
            this.superClasses.push(superClass);
        else
            console.log("Error! This would cause a loop.")
    };

    if (superClassList != null && superClassList.length > 0)
        superClassList.forEach(s => { newClass.addSuperClass(s) });

    newClass.new = function () {
        return Object.create(this);
    };

    newClass.call = function (funcName, parameters) {
        if (this[funcName] != undefined)
            return this[funcName](parameters);
        else if (this.superClasses != undefined) {
            for (let i = 0; i < this.superClasses.length; i++) {
                let next = this.superClasses[i].call(funcName, parameters);
                if (next != undefined)
                    return next;
            }
        }
    };

    return newClass;
};

// Test 1 (should pass)
// var class0 = createClass("Class0", null);
// class0.func = function (arg) { return "func0: " + arg; };
// var class1 = createClass("Class1", [class0]);
// var class2 = createClass("Class2", []);
// class2.func = function (arg) { return "func2: " + arg; };
// var class3 = createClass("Class3", [class1, class2]);
// var obj3 = class3.new();
// var result = obj3.call("func", ["hello"]);
// console.log("should print ’func0: hello’ ->", result);

// Test 2 (should pass)
// class0 = createClass("Class0", null);
// class0.func = function(arg) { return "func0: " + arg; };
// var obj0 = class0.new();
// result = obj0.call("func", ["hello"]);
// console.log("should print ’func0: hello’ ->", result);

// Test 3 (should fail and generate an error in order to not create a loop)
// var class0 = createClass("Class 0", null);
// var class1 = createClass("Class 1", [class0]);
// class0.addSuperClass(class1);
