import React, { useEffect, useState }   from 'react';
import axios from 'axios';

const apiUrl = 'https://lit-meadow-85412.herokuapp.com/users';

function GetUsers () {
    const [users , setUsers] = useState([])

    useEffect(()=>{
        axios.get(apiUrl)
        .then(res => {
          setUsers(res.data)
          console.log(res.data)
        })
        .catch(console.error) 
      },[]);
    
    return (
        <div>
            <h3>Get All Users</h3>
            <ul className='userlist'>
                {users.map(user => <li key={user.id}><h5>USER:</h5>{user.username}<h5>EMAIL:</h5>{user.email}</li>)}
            </ul>
        </div>
    )
}

export default GetUsers
