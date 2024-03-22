import { ATTENDANCE, ATTENDANCE_ACTION } from "../constant";

const AttendanceReducerType = {
    [ATTENDANCE_ACTION.SET_STATUS]: (state, action) => {
        const newStatusInTypes = ( action.status ).includes(Object.keys(ATTENDANCE));
        if(newStatusInTypes) throw Error("Unknown Status : ",action.status )
        return {...state, status:action.status}
    },

    [ATTENDANCE_ACTION.UPDATE_DETAIL] : (state,action) => {
        const {type,...updatedAttendant} = action
        return state.map( attendant => {
            if ( attendant.nip === action.nip ) return updatedAttendant
            return attendant
        })
    } 
};

export const AttendanceReducer = (state, action) => {
    const newState = AttendanceReducerType[action.type](state, action);
    if (!newState) throw Error("Unknown Action : ", action.type);
    return newState;
};
