import React, { useEffect, useState }   from 'react';
import axios from 'axios';

const apiUrl = 'https://lit-meadow-85412.herokuapp.com/users';

function GetUsers () {
    const [users , setUsers] = useState([])
    return (
        <div>
            <h3>Hi I am GetUsers </h3>
        </div>
    )
}

export default GetUsers
