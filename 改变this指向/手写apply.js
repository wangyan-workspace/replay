/*
 * @Author: your name
 * @Date: 2021-10-12 17:35:58
 * @LastEditTime: 2021-10-12 18:02:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /replay/改变this指向/手写apply.js
 */

/**
 * apply 函数的实现步骤：
    1. 判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
    2. 判断传入上下文对象是否存在，如果不存在，则设置为 window 。
    3. 将函数作为上下文对象的一个属性。
    4. 判断参数值是否传入
    5. 使用上下文对象来调用这个方法，并保存返回结果。
    6. 删除刚才新增的属性
    7. 返回结果
 */

Function.prototype.myApply = function(context) {
    // 判断调用对象是否为函数
    if( typeof this !== "function"){
        throw new TypeError("Error");
    }

    // 定义一个result用于存储函数调用后的结果
    let result = null;

    // 判断context是否存在，如果未传入，则为window
    context = context || window;

    // 将函数设置为对象的方法
    context.fn = this;

    // 调用方法判断是否有参数传入
    if(arguments[1]){
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn();
    }

    // 将刚才新增的属性删除
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
console.log(fun1.myApply(obj,[1,3,4])); //Alice   Arguments(3) [1, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]