import React , {useState,useEffect} from 'react'
const Qbox=(props)=>{
  return(
    <>
    <h1 className="Ques">{props.question}</h1>
    <button className="op">{props.a1}</button>
    <button className="op">{props.a2}</button>
    <button className="op">{props.a3}</button>
    <button className="op">{props.a4}</button>
    </>
  )
}
const Question=()=>{
  const [tgt,settgt] = useState('')
  useEffect(()=>{
    const fdat=async()=>{
      try {
        //https://www.selfstudys.com/mcq/jee/online/mock-test/mathematics/mathematics-test-296
        const web="www.selfstudys"
        const part ="mcq/jee/online/mock-test/mathematics/mathematics-test-296"
        const url =`https://${web}.com/${part}`
        const data = await fetch("http://localhost:5000/api/scrape",{
          method:"POST",
          headers:{
            'Content-Type':"application/json"
          },
          body:JSON.stringify({url})
        })
        if (!data.ok) {
          alert(data.status)
          throw new Error("Http error")
        }
        
        const hstr = await data.json()
        const mstr=JSON.stringify(hstr)
        const dpar = new DOMParser()
        const pstr = dpar.parseFromString(mstr,"text/html")
        const ftl =pstr.querySelector("p").textContent
        settgt(ftl)
      } catch (error) {
        alert(error.message)
      }
      
    }
    fdat()
  },[])
  return(
    <>
    <Qbox style = {{margin:"20vw"}} question={tgt} a1="good" a2="bad" a3="none" a4="all"/>
    </>
  )
}
export default Question