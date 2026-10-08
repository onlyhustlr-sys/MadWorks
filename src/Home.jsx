import "./Home.css"
import React,{useRef} from "react"
import Question from "./Question.jsx"

function Home(){
const secref = useRef(null)
const myhandle =(e)=>{
  e.preventDefault()
  secref.current?.scrollIntoView({behavior:"smooth"})
}
  return(
    <>
      <h1 className="pl">!NO EXCUSES!</h1>
      <button className="btn" onClick={myhandle}>↓Practice Now↓</button>
      <hr className="coolhr"/>
      <div className="det">
        <progress style={{height:"6vh",width:"90vw",margin:"4vw",border:"2% lightblue dotted"}}></progress>
      <h1 className="aim">Tired of Waiting?</h1>
      <p className="aimd">Found yourself stuck in loads and loads of Preparation stuff locked behind paywall? <br/> 
        <br/>Or rather found yourself at an endless hunt for questions <br/> 
        <br/> Maybe you have even found yourself at "I want to be best"
        but then excused yourself until the site fetches the resources<br/> 
        <br/> <span className="emp"> Not Any More</span> <br/> <br/> 
        Our site Aims to deliver practice problems with zero signup 
        and instantly hooks every aspirant into what you most need the most 
        <span className="emp"> Practice </span>. </p>
      <section ref={secref}>
      <Question/>
      </section>
      </div>
    </>
  )
}
export default Home