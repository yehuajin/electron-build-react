import React, { Component } from 'react';
import './question.css'

export default class Home extends Component{
  render() {
    const { title, option } = this.props.question;
    let arr = []
    option.forEach((list, index) => {
      let item = <div><input key={index + 1} name={list} type="radio"/>{list}</div>
      arr.push(item)
    });
    return (
      <div className="question">
        <div className="question-title">
          {this.props.index + 1}.{title}
        </div>
        {arr}
      </div>
    );
  }
}
