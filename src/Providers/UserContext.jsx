import { createContext } from "react";

export const UserContext = createContext(null);


const UserProvider = ({children}) => {


    const authData= {

    }



    return (
        <UserContext.Provider value={authData}>
                {children}
        </UserContext.Provider>
    );  
};

export default UserProvider;