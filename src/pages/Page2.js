import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Question from '../component/Question'
const page1Questions = [
  {title: '您的性别', option: ['男', '女']},
  {title: '购物的方式通常为', option: ['实体店', '网购']},
  {title: '年级', option: ['大一', '大二', '大三', '大四']},
  {title: '生活来源', option: ['全部来自家庭', '部分来自家庭，部分靠自己赚取', '全部靠自己赚取']},
]
export default class Home extends Component{
  render() {
    let arr = []
    page1Questions.forEach((question, index) => {
      let item = <Question question={question} index={index + 4}/>
      arr.push(item)
    })
    return (
      <div className="page">
        {arr}
        <Link to='/'>提交</Link>
      </div>
    );
  }
}
