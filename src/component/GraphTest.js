import React,{useState} from 'react'
import './GraphTest.css'
import {graphq} from 'C:\\Users\\palay\\OneDrive\\Desktop\\react\\react_web\\elearn\\elearn\\src\\assets\\graphq.js'

export default function GraphTest() {

    let [index,setIndex]=useState(2);
 let [question,setQuestion]=useState(graphq[index]);
const checkAns=(e,ans)=>
{
    if(question.ans===ans)
        e.target.classList.add("correct");
    else
    e.target.classList.add("wrong");
}
  return (
    <div className='container'>
        <h1>
            Quiz On Graph
        </h1>
        <hr/>
        <h2>{index+1}.{question.question}</h2>
        <ul>
            <li onClick={(e)=>{checkAns(e,1)}}>{question.option1} </li>
            <li onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
            <li onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
            <li onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
        </ul>
        <button >Next</button>

    <div className="index">1 of 5 questions</div>
        



    </div>
  )
}
