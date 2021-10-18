/*
 * @Author: your name
 * @Date: 2021-10-12 17:09:15
 * @LastEditTime: 2021-10-12 18:23:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /replay/改变this指向/手写bind.js
 */

/*
    bind 函数的实现步骤：
        1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
        2.保存当前函数的引用，获取其余传入参数值。
        3.创建一个函数返回
        4.函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传入指定的上下文对象。
*/
Function.prototype.myBind = function(context) {
    // 判断调用对象是否为函数
    if(typeof this !== "function"){
        return new TypeError("Error");
    }

    // 保存当前函数的引用
    var fn = this;

    // 获取其余的参数
    let args = [...arguments].slice(1);

    // 创建一个函数返回
    return function Fn(){
        // 根据调用的方式，传入不同的绑定的值
        return fn.apply(this instanceof Fn ? this : context,args.concat(...arguments));
    }
}
