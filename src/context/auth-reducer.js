import {AUTH_INIT, AUTH_ERROR, AUTH_SIGN_UP, AUTH_LOG_IN, FN_SIGN_UP} from './auth-actions'



const auth_reducer = (state, action) => {
  console.log(`*****${action.type}`)

  if(action.type === AUTH_SIGN_UP){
    const {auth} = state
    const {email, password} = action.payload
    auth.signup(email, password)
      .then(response => console.log("Success!Check your inbox! ", response))
      .catch(error => console.log("It 's an error", error));
    return {...state}
  }

  if(action.type === AUTH_ERROR){
    return {...state }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default auth_reducer
