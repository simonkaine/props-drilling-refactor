import { useContext, createContext, useState } from "react";

const userContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [likes, setLikes] = ([]);
    const [motto, setMotto] = ('');
    const [color, setColor] = ('');
    const [header, setHeader] = ('');

    return (
        <userContext.Provider value={{ 
            user, setUser,
            name, setName,
            likes, setLikes,
            motto, setMotto,
            color, setColor,
            header, setHeader
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