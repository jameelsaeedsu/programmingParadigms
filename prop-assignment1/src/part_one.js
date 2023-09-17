// Assignment 1, Part 1
// Jameel Saeed (JASA6359)
// Rasmus Rodriguez (RAER3426)

let myObject = {
    create: function (prototypeList) {
        let obj = {};
        obj.prototypes = [];
        Object.assign(obj, myObject);

        obj.hasPrototype = function (p) {
            let found = false;
            for (let i = 0; i < this.prototypes.length; i++) {
                if (this.prototypes[i] === p) {
                    found = true;
                    break;
                }
            }
            return found;
        };

        obj.addPrototype = function (p) {
            if (!p.hasPrototype(this))
                this.prototypes.push(p);
            else
                console.log("Error! This would cause a loop.")
        };

        if (prototypeList != null && prototypeList.length > 0)
            prototypeList.forEach(p => { obj.prototypes.push(p) });

        return obj;
    },

    call: function (funcName, parameters) {
        if (this[funcName] != undefined)
            return this[funcName](parameters);
        else if (this.prototypes != undefined) {
            for (let i = 0; i < this.prototypes.length; i++) {
                let next = this.prototypes[i].call(funcName, parameters);
                if (next != undefined)
                    return next;
            }
        }

        // Should throw error msg if there is no hits. I don't know how to solve this without throwing it 
        // every time a prototype in the list of prototypes does not have the function we're looking for.
    }
};

// Test 1 (should pass)
// var obj0 = myObject.create(null);
// obj0.func = function (arg) { return "func0: " + arg; };
// var obj1 = myObject.create([obj0]);
// var obj2 = myObject.create([]);
// obj2.func = function (arg) { return "func2: " + arg; };
// var obj3 = myObject.create([obj1, obj2]);
// var result = obj3.call("func", ["hello"]);
// console.log("should print ’func0: hello’ ->", result);

// Test 2 (should pass)
// obj0 = myObject.create(null);
// obj0.func = function(arg) { return "func0: " + arg; };
// obj1 = myObject.create([obj0]);
// obj2 = myObject.create([]);
// obj3 = myObject.create([obj2, obj1]);
// result = obj3.call("func", ["hello"]);
// console.log("should print ’func0: hello’ ->", result);

// Test 3 (should fail and generate an error in order to not create a loop)
// var obj0 = myObject.create(null);
// var obj1 = myObject.create([obj0]);
// obj0.addPrototype(obj1);
