import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='todo-footer'>
        <label htmlFor=""></label>
        <span>
          <span>已完成</span> / 全部
        </span>
        <button className='btn btn-danger'>清除已完成任务</button>
      </div>
    )
  }
}
