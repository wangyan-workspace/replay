/*
 * @Author: your name
 * @Date: 2021-10-24 15:42:19
 * @LastEditTime: 2021-10-24 16:40:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /replay/mobx-picture/src/store/index.js
 */
import { observable,action,computed } from 'mobx';
import moment from 'moment';

class AppStore {
    @observable time = "2021-10-24"
    @observable todos = []

    @computed get desc() {
        return `${this.time} 还有${this.todos.length}条任务待完成`
    }
    @action addTodo(todo){
        this.todos.push(todo);
    }
    @action deleteTodo() {
        this.todos.pop();
    }
    @action resetTodo() {
        this.todos = [];
    }
    @action getNow() {
        this.time = moment().format('YYYY-MM-DD HH:mm:ss')
    }
}

const store = new AppStore();

setInterval(()=>{
    store.getNow()
},1000)

export default store;

