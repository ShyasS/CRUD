import React from 'react';
import { useUserContext } from '../userContext/userContext';

function Header(){
    const {user,logOut} = useUserContext();
return(
    <div>
        <h1 style={{marginLeft:'900px',marginTop:'30px'}}>Welcome {user.name}
        {!user.isGuestUser && (<button className='btn btn-primary' onClick={logOut}>LogOut</button>)}
        </h1> 

    </div>
)
}
export default Header;