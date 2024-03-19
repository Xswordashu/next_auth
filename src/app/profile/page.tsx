'use client'
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const ProfileComponent = () => {

   const [user, SetUser] = useState({})
  useEffect(()=>{

    const getUserDetails = async()=>{
        try{
        const res = await axios.get('/api/user/profile')
        console.log(res.data.user);
        SetUser(res.data.user);
        }catch(error){
            console.log(error);
        }
    }

    getUserDetails();
  },[])
  return (
    <div>
        ProfileComponent Page
              <h4>{user?.email}</h4>
              <h4>{user?.username}</h4>
    </div>
  )
}

export default ProfileComponent