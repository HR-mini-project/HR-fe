import { CONTENT } from "../constant";
import useContentContext from "../hooks/useContent";
import AttedanceDetail from "./AttendanceEdit";

export default function AttedanceTable() {
    const updateAttendanceId="UPDATE_ATTENDANCE"
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Departemen</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Arrival</th>
                            <th>Leave</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <Row
                            no={1}
                            nama={"Muhamad Habil Rahman"}
                            email={"mhabilr@inovasi360.com"}
                            img={"./src/assets/orang.png"}
                            fungsi
                            status={"TIDAK_HADIR"}
                            arrival={"8:30"}
                            leave={"17:11"}
                        />
                    </tbody>
                </table>
            </div>
        </>
    );
}

function Row({ no, nama, email, img, departemen,role, status, arrival, leave }) {
    const{setContent} = useContentContext()
    const attendanceDetail = <AttedanceDetail /> 
    return (
        <tr>
            <td>{no}</td>
            <td>
                <Name nama={nama} email={email} img={img} />
            </td>
            <td>{departemen}</td>
            <td>{role}</td>
            <td ><Status status={status}/></td>
            <td>{arrival}</td>
            <td>{leave}</td>
            <td>
                <button onClick={e => setContent(CONTENT.ATTENDANCE_EDIT)}>✏️</button>
            </td>
        </tr>
    );
}

function Name({ img, nama, email }) {
    return (
        <>
            <div className="flex gap-2">
                <div className="w-[48px] justify-center align-middle">
                    <img src={img} className="rounded-full" />
                </div>
                
                <div className="flex flex-col justify-center align-middle">
                    <div className="">{nama}</div>
                    <div className="">
                        {email}
                    </div>
                </div>
            </div>
        </>
    );
}


function Status({status}){
    const color = {
        HADIR:"bg-hijau",
        IZIN:"bg-kuning",
        TIDAK_HADIR:"bg-merah",
    }
    const selectedColor = color[status]
    return ( 
        <>
            <p className={ `${selectedColor} w-full px-3 py-1 rounded-md text-center` }>{status.toLowerCase().split('_').join(' ')}</p> 
        </>)
}
