import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      {id:'002', name:'睡觉', done:true},
      {id:'003', name:'打豆豆', done:true},
      {id:'004', name:'再吃饭', done:false},
      
    ]
  }
  render() {
    const { todos} = this.state
    return (
      <div className="todo-container">
				<div className="todo-wrap">
          <Header></Header>
          <List todos={todos}></List>
          <Footer></Footer>
				</div>
			</div>
    )
  }
}
