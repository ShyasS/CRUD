import React from 'react';
import { useUserContext } from '../userContext/userContext';

function Home(){
    const {user} = useUserContext();
return(
    <div>
         <h3>You're now logged in as {user.name}</h3>
    </div>
)
}
export default Home;