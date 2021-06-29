import React, {useState, useEffect} from 'react'
import axios from 'axios';

const apiUrl = 'https://lit-meadow-85412.herokuapp.com/users/3';

function GetOneUser() {
    const [oneUser, setOneUser] = useState([])

    useEffect(()=>{
        axios.get(apiUrl)
        .then(res => {
          setOneUser(res.data)
          console.log(res.data)
        })
        .catch(console.error) 
      },[]);

    return (
        <div>
            <h3>Get One User</h3>
                <h5>USER:</h5>
               {oneUser.username}
                <h5>EMAIL:</h5>
                {oneUser.email}
    
        </div>
    )
}

export default GetOneUser

