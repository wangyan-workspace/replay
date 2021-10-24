/*
 * @Author: your name
 * @Date: 2021-10-24 15:34:43
 * @LastEditTime: 2021-10-24 15:55:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /replay/mobx-picture/src/App.js
 */
import React from 'react';
import { Provider } from 'mobx-react';
import store from './store';
import Home from './pages/home'

function App(){
    return (
        <div>
            <Provider store={store}>
                <Home></Home>
            </Provider>
        </div> 
    )
}

export default App;
