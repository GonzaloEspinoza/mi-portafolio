import React,{ useState, useEffect } from 'react'
import './main.css'

const CounterVisits =()=>{

    const [nun, setNun] = useState(0)

    useEffect(()=>{
            const url = "https://email-api-rest.herokuapp.com/api/control/show/visitas/aplication=miPortafolio"
            fetch(url)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setNun(data.visitas)
            })
    },[])

    return(
        <div className="counter-visits">
            <h3>  {nun} usuarios visitaron el sitio </h3>
        </div>
    )
}


export default CounterVisits