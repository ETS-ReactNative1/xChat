import React, {createContext,useState} from 'react';

export default ({ children }) =>{
    const [IsLoggedIn,setIsLoggedIn] = useState({});
    return (            
            <AppContext.Provider value={[IsLoggedIn,setIsLoggedIn]}>
                {children}
            </AppContext.Provider>  
    );
}

export const AppContext = createContext();