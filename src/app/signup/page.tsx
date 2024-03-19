'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const SignUpPage = () => {
    const router = useRouter();
    const [user, SetUser] = React.useState({
        email:"",
        password:"",
        username:""
    })

    

    const onSignUp = async()=>{
        try{
           const res = await axios.post("/api/user/signup", user);
           console.log("Sign_Up Success");
           router.push('/login');
        }catch(error){
            console.log('onsignup', error)
        }
    }
  return (
    <div className='bg-black text-white flex flex-col justify-center items-center h-screen'>
          <h1>Signup</h1> 
          <div className='m-5 flex flex-col items-center'>
          <label htmlFor="username">Username  </label>
          <input className='text-black' type="text"
           id='username' 
           value={user.username}
           placeholder= '  Enter Username'
           onChange={(e)=>SetUser({...user, username: e.target.value})}
          />
          </div>

          <div className='m-5 flex flex-col items-center'>
          <label htmlFor="email">Email  </label>
          <input className='text-black' type="email"
           id='email' 
           value={user.email}
           placeholder= '  Enter Email'
           onChange={(e)=>SetUser({...user, email: e.target.value})}
          />
          </div>

          <div className='m-5 flex flex-col items-center'>
          <label htmlFor="username">Password  </label>
          <input className='text-black' type="password"
           id='password' 
           value={user.password}
           placeholder= '  Enter Password'
           onChange={(e)=>SetUser({...user, password: e.target.value})}
          />
          </div>

          <button className='border-zinc-200 border-2 '
            onClick={onSignUp}
           >
              Click Me
          </button>

    </div>
  )
}

export default SignUpPage