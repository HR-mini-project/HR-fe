import { useEffect, useState } from "react";
import { CONTENT, url } from "../constant";
import useContentContext from "../hooks/useContent";
import useEmployeesContext from "../hooks/useEmployees";
import api from "../../../../api/api";
import useEmployeeDetailAttendance from "../hooks/useEmployeeAttendanceContent";
import { useEmployeeNipDetailContext } from "../hooks/useEmployeeDetail";

export default function DataEmployee() {
    const { employees, setEmployees } = useEmployeesContext();
    api.employees.getAll(null, setEmployees, 1, 5);

    const { setContent } = useContentContext();

    const { employeeNip, setEmployeeNip } = useEmployeeNipDetailContext();

    function editHandle(nip) {
        setContent(CONTENT.EMPLOYEE_EDIT);
        setEmployeeNip(nip);
    }
    return (
        <>
            <EmployeeFilter />
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Nip</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.length === 0 ? (
                            <tr>
                                <td colSpan="5">None</td>
                            </tr>
                        ) : (
                                employees.map((emp) => {
                                    return (
                                        <tr key={emp.id}>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>{emp.id}</td>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img
                                                                src={emp.img}
                                                                alt="Avatar Tailwind CSS Component"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{emp.name}</div>
                                                        <div className="text-sm opacity-50">{emp.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {emp.departement}
                                                <br />
                                                <span className="badge badge-ghost badge-sm">
                                                    {emp.job}
                                                </span>
                                            </td>
                                            <th>
                                                <button
                                                    className="btn btn-ghost btn-xs"
                                                    onClick={() => editHandle(emp.id)}
                                                >
                                                    ✏️
                                                </button>
                                            </th>
                                        </tr>
                                    );
                                })
                            )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

function EmployeeFilter() {
    return (
        <>
            <div className="border-b border-b-slate-300 h-24 w-full items-center flex px-3">
                <div className="w-72">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search.." />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>
                </div>
            </div>
        </>
    );
}
