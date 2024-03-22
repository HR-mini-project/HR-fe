import { createContext, useContext } from "react";


export const AuthContext = createContext('test')

export default function useAuthContext(){
    const auth = useContext(AuthContext)
    return auth
}
