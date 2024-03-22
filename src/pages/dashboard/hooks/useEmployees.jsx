import { createContext, useContext } from "react"

export const EmployeesContext = createContext(null)

export default function useEmployeesContext(){
    const employee = useContext(EmployeesContext)
    return employee
}
