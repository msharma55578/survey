import React from 'react'

const ApiCall=()=>{
    axios.get("http://localhost:8081/questions").then(result=>{
        console.log(result)
    })
}