import React, { useContext, useEffect, useReducer } from 'react'

import {AUTH_INIT, AUTH_SIGN_UP, AUTH_ERROR, AUTH_LOG_IN, FN_SIGN_UP } from './auth-actions'

import reducer from './auth-reducer'

const AuthContext = React.createContext();


const initialState = {
  auth: {}
}


// only used in root-wrapper
export const AuthProvider = ({children})=>{
  const [state,dispatch] = useReducer(reducer, initialState)


  const signUpUser = (data) => {
    try{
      dispatch({type: AUTH_SIGN_UP, payload: data})
    }catch(err){
      console.log('caught in context-catch')
      dispatch({type: AUTH_ERROR, payload: err})
    }
  }



  useEffect(()=>{
    console.log('I am auth service')
  }, [])

  return <AuthContext.Provider value={{ ...state, signUpUser }}>
    {children}
  </AuthContext.Provider>
}


export const useAuthContext= () => {
  return useContext(AuthContext)
}
