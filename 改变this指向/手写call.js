/*
 * @Author: your name
 * @Date: 2021-10-12 17:55:20
 * @LastEditTime: 2021-10-12 18:10:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /replay/改变this指向/手写call.js
 */
/**
 * call 函数的实现步骤：
    1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
    2.判断传入上下文对象是否存在，如果不存在，则设置为 window 。
    3.处理传入的参数，截取第一个参数后的所有参数。
    4.将函数作为上下文对象的一个属性。
    5.使用上下文对象来调用这个方法，并保存返回结果。
    6.删除刚才新增的属性。
    7.返回结果。
 */

Function.prototype.myCall = function(context) {
    // 判断调用对象是否为函数
    if(typeof this !== "function") {
        return new TypeError("Error");
    }

    // 定义一个result用于存储函数调用后的结果
    let result = null;
    // 判断context是否传入，如果未传入则设置为window
    context = context || window;

    // 将调用函数设置为对象的方法
    context.fn = this;

    // 获取传入的参数
    let args = [...arguments].slice(1);

    // 调用函数
    result = context.fn(...args);

    // 将新添加的属性删除
    delete context.fn;

    return result;
}
const name = "Jhon";
const fun1 = function(){
    console.log(this.name);
    console.log(arguments);
}
let obj = {
    name:"Alice"
}
console.log(fun1.myCall(obj,1,3,4)); //Alice     Arguments(3) [1, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]