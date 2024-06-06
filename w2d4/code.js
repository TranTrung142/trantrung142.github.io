// Ex 1
String.prototype.filter = function (banned) {
    return this.split(' ').filter(s => s != banned).join(' ');
}

console.log("This house is not nice!".filter('not'));

// Ex 2
Array.prototype.bubbleSort = function () {
    let n = this.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
    return this;
}
console.log([6, 4, 0, 3, -2, 1].bubbleSort());


// Ex 3
var Person = function() {};
Person.prototype.initialize = function(name, age) {
 this.name = name;
 this.age = age;
}
Person.prototype.describe = function() {
 return this.name + ", " + this.age + " years old.";
}

var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject) {
 console.log(this.name + " just learned " + subject);
 return this.name + " just learned " + subject;
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");


var Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
 console.log(this.name + " is now teaching " + subject);
 return this.name + " is now teaching " + subject;
}

var teacher = new Teacher();
teacher.initialize("Micheal", 25);
teacher.teach("WAP");
