import { EMPLOYEE_ACTION } from "../constant";

const EmployeeActionType = {
    [EMPLOYEE_ACTION.ADD_EMPLOYEE]: (state, action) => {
        const {type, ...newEmployee} = action
        return [
            ...state, 
            newEmployee
       ]
    },
   
    [EMPLOYEE_ACTION.DELETE_EMPLOYEE]: (state, action) => {
        return state.filter(employee => employee.nip !== action.nip)
    },
   
    [EMPLOYEE_ACTION.EDIT_EMPLOYEE]: (state, action) => {
        const {type, ...updatedEmp} = action
        return state.map((employee) => {
            if (employee.nip === action.nip) return { ...updatedEmp };
            return employee;
        });
    },
};

export const EmployeeReducer = (state, action) => {
    const newState = EmployeActionType[action.type](state, action);
    if (!newState) throw Error("Unkown Action :", action.type);
    return newState;
};
