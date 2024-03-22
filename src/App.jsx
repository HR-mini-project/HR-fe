import { useReducer, useState } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import { AuthContext } from "./pages/dashboard/hooks/useAuthContext";
import { ContentContext } from "./pages/dashboard/hooks/useContent";
import { CONTENT, url } from "./pages/dashboard/constant";
import { EmployeesContext } from "./pages/dashboard/hooks/useEmployees";
import { EmployeeDetailNipContext } from "./pages/dashboard/hooks/useEmployeeDetail";

function App() {
    const [content, setContent] = useState(CONTENT.HOME);
    const [auth, setAuth] = useState(null);
    const [employees, setEmployees] = useState([]);
    const [employeeNip, setEmployeeNip] = useState(null);


    return (
        <>
            <EmployeeDetailNipContext.Provider
                value={{ employeeNip, setEmployeeNip }}
            >
                <ContentContext.Provider value={{ content, setContent }}>
                    <AuthContext.Provider value={{ auth, setAuth }}>
                        <EmployeesContext.Provider value={{ employees, setEmployees }}>
                            <Dashboard />
                        </EmployeesContext.Provider>
                    </AuthContext.Provider>
                </ContentContext.Provider>
            </EmployeeDetailNipContext.Provider>
        </>
    );
}

export default App;
