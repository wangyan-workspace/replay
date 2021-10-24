/*
 * @Author: your name
 * @Date: 2021-10-24 15:50:55
 * @LastEditTime: 2021-10-24 16:43:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /replay/mobx-picture/src/pages/home/index.js
 */
import React from 'react';
import { inject,observer} from 'mobx-react';
import './style.css'
@inject ('store') @observer
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    handleTodos(type){
        let {store} = this.props;
        switch (type) {
            case 'add':
                store.addTodo('一条新任务')
                break;
            case 'delete':
                store.deleteTodo();
                break;
            case 'reset':
                store.resetTodo();
                break;
        
            default:
                break;
        }
    }
    render() {
        let { store } = this.props;
        return (
            <div className="home">
                <h1>在React中使用mobx</h1>
                <div>{store.desc}</div>
                <button onClick={this.handleTodos.bind(this,'add')}>添加一条任务</button> 
                <button onClick={this.handleTodos.bind(this,'delete')}>删除一条任务</button> 
                <button onClick={this.handleTodos.bind(this,'reset')}>任务重置</button> 
                {
                    store.todos.map((item,index,arr)=>{
                        return (
                            <div key={index}>
                                {item}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}