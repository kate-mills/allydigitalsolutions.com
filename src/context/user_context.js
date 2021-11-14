import React, {useContext } from 'react';

const UserContext = React.createContext();


const UserProvider = ({children}) => {

  return(
    <UserContext.Provider
      value={{
        userIdentity: 'fake-person'
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
