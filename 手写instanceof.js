/*
 * @Author: your name
 * @Date: 2021-10-12 20:09:18
 * @LastEditTime: 2021-10-12 20:17:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /replay/手写instanceof.js
 */

function myInstanceof(target,origin){
    // 这里先用typeof判断基本数据类型和函数，如果是，直接返回false
    if(typeof target !== "object" || target === null) return false;
    // getPrototypeOf是Object对象自带的API，能够拿到参数的原型对象
    let proto = Object.getPrototypeOf(target);
    while(true){
        if(proto === null) return false;
        if(proto === origin.prototype) return true; //找到相同的原型对象返回true
        proto = Object.getPrototypeOf(proto);
    }
}

let str1 = new String('hello');
const str2 = "XXX"
console.log(myInstanceof(str1,String));  //true
console.log(myInstanceof(str2,String));  //false