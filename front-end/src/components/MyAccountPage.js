import { useState, useEffect } from "react"
import axios from "axios"
import "./../styles/MyAccountPage.css"



const GetData = () => {
    const [user, setUser] = useState()

    useEffect(() => {

        fetch(`http://localhost:3001/myAccount/${username}`)
     /*   .then(res => {
            return res.json() //.json()
        }) */
        .then(data => {
            setUser(data)
        })
        .catch(err => {
            console.log(err)
        })
    })

    return (
        <div>
            <h1>{user.username}</h1>
        </div>
    )
}

export default GetData

