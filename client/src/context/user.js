import React, {useEffect, useState} from "react";

const UserContext = React.createContext();

function UserProvider({children}){
  const [user, setUser] = useState(null);
  useEffect( () => {
    fetch("/me")
    .then((r) => {
      if(r.ok){
        r.json().then((user) => setUser(user))
      }
    })
  }, []);

  return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };