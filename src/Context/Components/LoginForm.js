import React,{useState} from 'react';
import { useUserContext } from '../userContext/userContext';

function LoginForm(){
    const { logIn }= useUserContext();
    const [username,setUsername] = useState({
        name:'',
        password:''
    })
    const HandleSubmit = () =>{
        logIn(username.name);
        console.log(username.name)
    }
    const HandleChange =(event)=>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setUsername({
            ...username,
            [name] : value
        })
    }
return(
    <div>
       <div class="card" style={{width:'20rem',height:'40vh',margin:'100px auto',borderBlockColor:'darkred'}}>
  <div class="card-body">
       <h3 style={{textAlign:'center'}}>Login-Form</h3>
       <input type='email' placeholder='Enter mail'value = {username.name} name= "name" onChange={HandleChange} style={{width:'280px', borderRadius:'30px',outline:'none', margin:'40px 5px'}}/>
       <input type='password' placeholder='Enter password' value = {username.password} name = "password" onChange={HandleChange} style={{width:'280px', borderRadius:'30px',outline:'none', margin:'-20px 5px'}}/>
      <button class="btn btn-primary" style={{margin:'30px', width:'280px',marginLeft:''}}onClick={HandleSubmit}>Submit</button>
  </div>
</div>
    </div>
)
}
export default LoginForm;