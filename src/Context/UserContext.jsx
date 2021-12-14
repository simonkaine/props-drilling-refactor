import { useContext, createContext, useState, useEffect } from "react";
import { fetchUser } from '../services/user'

const userContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetchUser()
          .then((fetchedUser) => {
            setUser(fetchedUser)
          })
          .catch((error) => {
            throw new Error(`Error: ${error}`)
          })
      }, [])

    return (
        <userContext.Provider value={{ 
            user
        }}>
            {children}
        </userContext.Provider>
    )
}

const useUser = () => {
    const context = useContext(userContext)
    if(context === undefined) {
        throw new Error('Error! Error! Error!')
    }
    return context
}

export { UserProvider, useUser }