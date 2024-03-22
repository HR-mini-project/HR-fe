import { createContext, useContext } from "react";

export const EmployeeDetailNipContext = createContext(null)

export function useEmployeeNipDetailContext(){
    const employee = useContext(EmployeeDetailNipContext)
    return employee
}
