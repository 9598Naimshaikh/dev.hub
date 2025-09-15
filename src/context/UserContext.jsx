import { createContext } from 'react';

export const DataContext = createContext();

const UserContext = ({ children }) => {
    const data = {
        name: "Naim Shaikh",
        image: "https://avatars.githubusercontent.com/u/105026462?v=4"
    }
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default UserContext;
