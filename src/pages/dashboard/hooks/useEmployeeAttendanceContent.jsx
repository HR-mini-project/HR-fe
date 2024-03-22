import { createContext, useContext } from "react"

export const employeeAttendanceContext = createContext(null)

export default function useEmployeeDetailAttendance(){
    const emp = useContext(employeeAttendanceContext)
    return emp
}
