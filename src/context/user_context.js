import React, {useContext, useState } from 'react';

import { useIdentityContext } from 'react-netlify-identity-gotrue'

const UserContext = React.createContext();

const UserProvider = ({children}) => {

  const identity = useIdentityContext()
  const [processing, setProcessing] = useState(false)

  const updateRoles = ({ add, remove }) => {
    setProcessing(true)
    identity.authorizedFetch('/api/update-role', {
      method: 'POST',
      body: JSON.stringify({
        action: add ? 'add' : 'remove',
        role: add || remove
      })
    })
      .then(identity.refreshUser)
      .finally(() => setProcessing(false))
  }

  return(
    <UserContext.Provider
      value={{
        identity,
        processing,
        userIdentity:identity ? identity.user: {user:'nope'},
      }}
    >
      {children}
    </UserContext.Provider>
  );
};



// make sure use
export const UseUserContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider };
