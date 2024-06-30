import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const UserContext = createContext(null);


const UserProvider = ({children}) => {

    const [person, setPerson] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/users")
                setPerson(response.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

    const authData= {
        person, 
    }



    return (
        <UserContext.Provider value={authData}>
                {children}
        </UserContext.Provider>
    );  
};

export default UserProvider;