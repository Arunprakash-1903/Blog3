import Header from '../components/Header'
import '../styles/globals.css'
import MuiAlert from '@material-ui/lab/Alert';
// import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../components/footer'
import Links from "../components/Links"
import Head from 'next/head'

import {useEffect, useState} from "react"
import { auth } from '../firebase/firebsae'
import { AuthContextProvider, useAuth } from '../AuthContext'
import {Snackbar,IconButton,CloseIcon,Paper} from "@mui/material"
import RecentPost from '../components/RecentPost';




function MyApp({ Component, pageProps }) {
const{user}=useAuth()
const [open, setOpen] =useState(false);



const handleClick = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};






  return (
 
<AuthContextProvider>
     <Head>
        <title>Top Blogs</title>
     
      </Head>
      <Header  fun={handleClick} />

    <div className="main">
    <Links/>
      <main className='container'>
        <Component {...pageProps} />
      </main>
      <div className="recentPost__container">
        
      <RecentPost  />
      </div>
      </div>
      <div className="button_container">
        <div className="button_top">
        <img className="Arrow" src="/images/posts/ArrowUp.png" alt="dgs" />
        </div>
      </div>
      {!user&&  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success">
          Loged Out Successfully
        </MuiAlert>
      </Snackbar>}
      <Footer/>
      </AuthContextProvider>
  )

}

export default MyApp
