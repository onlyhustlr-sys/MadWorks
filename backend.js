const express = require("express")
const axios = require("axios")
const cors = require("cors")
const path = require("path")
const PORT = process.env.PORT || 5000
const app =express()
app.use(cors())
app.use(express.json())
app.post("/api/scrape", async (req,res)=>{
  try {
    const {url}=req.body
    const resp=await axios.get(url,{headers:{'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.google.com/',
        'Sec-Ch-Ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1'}})
    res.json({data:resp.data})
  } catch (error) {
    if (error.response) {
      console.log(`server responded with ${error.response}`)
    } else {
      console.log(`some error \n ${error}`)
    }
  }
})
app.use(express.static(path.join(__dirname,"dist")))
app.get("/*any",(req,res)=>{
  res.sendFile(path.join(__dirname,"dist","index.html"))
})
app.listen(PORT,()=>console.log("Done"))