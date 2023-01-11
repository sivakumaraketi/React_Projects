import React, { useEffect, useState } from "react"


const url = "https://jsonplaceholder.typicode.com/users"

const FetchAPIDemo = () => {
const [users, setUsers] = useState();
useEffect(() => {
    fetch(url).then((response) => response.json())
    .then((json) => setUsers(json))
})
console.log("users", users);
return(
    <div>
        {users && users.map(({username}) => {
            return (
            <div>{username}</div>
            )
            
        })}
    </div>
)

}

export default FetchAPIDemo;