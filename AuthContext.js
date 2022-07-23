import { createContext, useContext, useEffect, useState } from 'react'
import {auth,provider} from "./firebase/firebsae"
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from 'firebase/auth'



  

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
  children,
}) => {
  const [user, setUser] = useState(null)


  const [open, setOpen] =useState(false);
  
  const handleClick = () => {
    setOpen(true);
   
  }; 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL:user.photoURL
        })
      } else {
        setUser(null)
      }
      
    })

    return () => unsubscribe()
  }, [])

 

  const login=()=>{
    signInWithPopup(auth,provider).then((res=>{
        
        //console.log(res);
        
        
      
    })).catch((err)=>console.log(err))
}

  const logout = async () => {
    
    setUser(null)
    signOut(auth)
   
  }
  return (
    <AuthContext.Provider value={{ user ,login,  logout }}>
      {children}
    </AuthContext.Provider>
  )
}