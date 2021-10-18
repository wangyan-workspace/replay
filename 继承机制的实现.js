/*
 * @Author: your name
 * @Date: 2021-10-12 20:47:19
 * @LastEditTime: 2021-10-12 23:00:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /replay/继承机制的实现.js
 */

// 寄生组合式继承
function Parent(){
    this.name = 'parent';
    this.play = [1,2,3,4];
}
Parent.prototype.getName = function() {
    return this.name;
}

function Child(){
    Parent.call(this);
    this.friend = 'child';
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.getFriend = function() {
    return this.friend;
}
let child1 = new Child();
console.log(child1) // Child {name: 'parent', play: Array(4), friend: 'child'}
console.log(child1.getName()); //parent
console.log(child1.getFriend()); //child

// extends继承
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getName() {
        console.log('Person',this.name);
    }
    getAge() {
        console.log('Person',this.age);
    }
}

class Gamer extends Person {
    constructor(...params){
        super(...params);
        this.height = params[2];
    }
    code() {
        console.log('Gamer',this.name + ' is coding');
    }
    getName() {
        console.log('Gamer',this.name);
    }
    getHeight() {
        console.log("Gamer",this.height);
    }
}

let gamer1 = new Gamer("lisi",18,180);
gamer1.getName(); // Gamer lisi
gamer1.code();  // Gamer lisi is coding
gamer1.getAge();  // Person 18
gamer1.getHeight(); // Gamer 180