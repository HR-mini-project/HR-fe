import AttedanceTable from "./AttedanceTable";
import EmployeeAttendanceTable from "./EmployeeAttendance";
import { Profile } from "./Profile";
import React from "react";
import EmployeeAttendanceChart from "./EmployeeAttendanceChart";
import useEmployeesContext from "../hooks/useEmployees";

export default function AttedanceDetail() {
    const {employees, setEmployees} = useEmployeesContext()
    return (
        <>
            <div className="flex flex-col justify-center h-screen my-auto ">
                <div className="flex flex-col  w-full gap-y-5 ">
                    <div className="w-3/4 mx-auto flex flex-col gap-y-5">
                        <Profile
                            name={"habil"}
                            email={"mhabilr@inovasi360.com"}
                            position={"Programmer"}
                            departemen={"Mekanik"}
                            img={"./src/assets/orang.png"}
                        />

                        <div className="bg-[#27374D] bg-opacity-80 py-2 px-4 rounded-xl ">
                            <EmployeeAttendanceChart />
                        </div>
                    </div>

                    <div className="px-10">
                        <EmployeeAttendanceTable />
                    </div>
                </div>
            </div>
        </>
    );
}

