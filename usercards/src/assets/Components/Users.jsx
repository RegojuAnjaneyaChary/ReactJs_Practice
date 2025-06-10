import React from "react";
import { Userdata } from "./Usersdata";
import './Users.css'

function Users(){
    return(
        <div className="users-container">
            {
                Userdata.map((u) => {
                    console.log(u)
                     return(
                                 
                        <div className="userimage">
                                <img src={u.image} alt="" />
                        <div>
                            <h1>{u.name}</h1>
                           <h1>{u.email}</h1>
                            <h1>{u.phone}</h>
                            <h1>{u.address}</h1>
                            <h1>{u.city}</h1>
                            <h1></h1>
                        </div>
                         
                        </div>
                
                     )
                    
                    })
            }
        </div>
    )
}
export default Users;