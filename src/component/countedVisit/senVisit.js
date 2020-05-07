import React,{ useState, useEffect } from 'react'

const SendVisit =()=>{


    useEffect(()=>{
       

        const url = 'https://email-api-rest.herokuapp.com/api/control'
            const data ={
                nameAplication:'miPortafolio'
            }
            const params={
                method: 'POST',
                body: JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json',
                  }
            }
    
            fetch(url, params)
            .then(data=>data.json())
            .then(res=>{
                console.log(res)
            })
    
        
    },[])
}


export default SendVisit