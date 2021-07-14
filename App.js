import React,{useState} from 'react'
import "./style..css"

const Apple=()=>{

    let[score,setScore]= useState(0)

    return(
        <div>
            <h1>The score</h1>
            <h2>The value of {score}</h2>
            <button onClick={()=>(score<25?setScore(score+1):"")}>Increment</button>
            <button onClick={()=>(score>0?setScore(score-1) :"")}>Decrement</button>
            <button onclick={()=>setScore(0)}>Reset</button>
        </div>
    )
}

export default Apple
