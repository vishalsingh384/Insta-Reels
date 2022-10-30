import React from 'react'
import {auth} from '../firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export const AuthContext=React.createContext();
function AuthWrapper({children}) {
    console.log("hello");
    //feature created
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    const store={
        login
    }
  return (
    <AuthContext.Provider value={store}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthWrapper