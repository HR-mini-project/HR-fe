import DashboardLayout from "./DashboardLayout";
import Attendance from "./components/Attendance";
import AttedanceDetail from "./components/AttendanceEdit";
import AttedanceEdit from "./components/AttendanceEdit";
import DataEmployee from "./components/DataEmployee";
import EmployeeEdit from "./components/EmployeeEdit";
import Home from "./components/Home";
import { CONTENT } from "./constant";
import useContentContext from "./hooks/useContent";
import EmployeeAttendanceDetailModal from "./components/EmployeeAttendanceDetail";
import { useEmployeeNipDetailContext } from "./hooks/useEmployeeDetail";
import { Button,  } from "flowbite-react";
import { useState } from "react";


export default function Dashboard() {
    const { content } = useContentContext();
    const contents = {
        [CONTENT.HOME]: <Home />,
        [CONTENT.EMPLOYEE_DATA]: <DataEmployee />,
        [CONTENT.EMPLOYEE_EDIT]: <EmployeeEdit />,
        [CONTENT.ATTENDANCE]: <Attendance />,
        [CONTENT.ATTENDANCE_DETAIL]: <AttedanceDetail />,
        [CONTENT.ATTENDANCE_EDIT]: <AttedanceEdit />,
        [CONTENT.ATTENDANCE_APPROVAL]: <AttendanceApproval />,
        [CONTENT.TEST]: <EmployeeAttendanceDetailModal disable={true} />,
    };

    return (
        <>
            <DashboardLayout>{contents[content]}</DashboardLayout>
        </>
    );
}

function AttendanceApproval() {
    const { employeeNip } = useEmployeeNipDetailContext();

    const [openModal, setOpenModal] = useState(false)
    
    function openDetail  (){
        setOpenModal(true)
    }

    function closeDetail(){
        setOpenModal(false)
    }

    return (
        <>

            <div className="overflow-x-auto">
              <EmployeeAttendanceDetailModal show={openModal} disable={true} onClose={closeDetail}  employeeNip={employeeNip}/>
                    <table className="table">
                    <thead>
                        <tr>
                            <th>Nip</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Arrival</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <Row
                            nip="1110"
                            name="habil ganteng"
                            departemen="engineer"
                            jobdesc="programmer"
                            arrival="12:23"
                            onClickDetail={openDetail}
                        />
                        <Row
                            nip="2220"
                            name="habil tampan"
                            departemen="engineer"
                            jobdesc="programmer"
                            arrival="12:23"
                            onClickDetail={openDetail}
                        />
                        <Row
                            nip="3330"
                            name="habil cakep"
                            departemen="engineer"
                            jobdesc="programmer"
                            arrival="12:23"
                            onClickDetail={openDetail}
                        />
                    </tbody>
                </table>
            </div>
        </>
    );
}

function Row(props) {
    const { nip, name, email, departemen, jobdesc, arrival, status, img, onClickDetail } = props
    const { setEmployeeNip } = useEmployeeNipDetailContext();
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <tr id={nip}>
                <td>{nip}</td>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {departemen}
                    <br />
                    <span className="badge badge-ghost badge-sm">{jobdesc}</span>
                </td>
                <td>{arrival}</td>
                <td>{status}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">✔️ </button>
                    <button className="btn btn-ghost btn-xs">❌</button>
                    <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => {
                            setEmployeeNip(nip);
                            onClickDetail()
                        }}
                    >
                        details
                    </button>
                </th>
            </tr>
        </>
    );
}
