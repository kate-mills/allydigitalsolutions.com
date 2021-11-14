import React from "react"

import { UserProvider } from './src/context/user_context';

export const wrapRootElement = ({element}) => {
  console.log('UserProvider', UserProvider)
  return (
    <UserProvider>
      {element}
    </UserProvider>
  )
}
