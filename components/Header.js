import { Avatar,Button,Snackbar,IconButton } from '@mui/material';
import Link from 'next/link'
import React from "react"

import { signInWithPopup } from 'firebase/auth';
import {auth,provider} from "../firebase/firebsae"
import { useAuth } from '../AuthContext';
import { handleClickEvent } from '../AuthContext';
import { useState } from 'react';


export default function Header({fun}) {
  const { user, login,logout  } = useAuth()



  
  return (
    <>
    <header>
      <Link href="/ " passHref="">
        <h2>Top Blogs</h2>
      </Link>
     <nav>
      <ul className='nav__links'>
      <Link href="/ " passHref>
    <li> <a href="#">Home</a></li>
    </Link>
    <Link href="/About" passHref><li><a href="#">About </a></li></Link>
    <li><a href="#">Contact </a></li>
   
   {user?<Button variant="text" onClick={fun}>
       
      <Avatar onClick={logout} className='header__avatar'  sx={{ width: 24, height: 24 }} alt="user photo" src={user.photoURL}/></Button>: <li><a onClick={login} href="#">Sign In</a></li>} 


      </ul>
     </nav>
 


     
    </header>
    <div className="header__logout">
      <p>Sign Out</p>
    </div>
    </>
  )
}
