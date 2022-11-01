import React, { useEffect, useState } from 'react'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Logout } from '@mui/icons-material';
export const AuthContext=React.createContext();
function AuthWrapper({children}) {
  const [user,setUser]=useState('');
  const[loading,setLoading]=useState(true);

    console.log("in auth wrapper");

    //feature created
    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        if(user){
          console.log("user called");
          setUser(user);
        }else{
          //signout
          setUser('');
        }
      })
      setLoading(false);
    },[])

    function login(email,password){
      //goes to firebase check if function called is legit
      //email pass checks with users table in authentication service
      //if present success, else fail
        return signInWithEmailAndPassword(auth,email,password);
    }

    function logout(){
      return signOut(auth);
    }

    function forgotPass(email){
      return sendPasswordResetEmail(auth,email);
    }

    function signup(email,password){
      return createUserWithEmailAndPassword(auth,email,password);
    }


    const store={
        login, 
        user,
        logout,
        forgotPass,
        signup
    }
  return (
    <AuthContext.Provider value={store}>
        {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthWrapper;