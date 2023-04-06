import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render() {
    const {name} = this.props
    return (
      <li>
        <label htmlFor="">
          <input type="checkbox" name="" id="" />
          <span>{ name}</span>
        </label>
        <button className='btn btn-danger' style={{display:'noen'}}>删除</button>
      </li>
    )
  }
}
