import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { ColorRing } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} =  useContext(AuthContext);

    const location = useLocation(); 

    if (loading) {
        return <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    }

    if(user){
        return children
    }


    return <Navigate to={"/login"} state={{from: location}} replace />

};

export default PrivateRoutes;