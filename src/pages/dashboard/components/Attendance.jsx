import AddAttendanceModal from "./AddAttendanceModals";
import AttedanceTable from "./AttedanceTable";

export default function Attendance() {

    const addAttendanceModalId='ADD_ATTENDANCE'
    return (
        <>
            <div className="bg-hitam h-20 flex justify-between items-center">
                
                <div></div>
                <div className="flex">
                    <button className="btn btn-secondary bg-blue-200 " onClick={()=>document.getElementById(addAttendanceModalId).showModal()}>
                        Add Attendance</button>
                    <AddAttendanceModal dialogId={addAttendanceModalId}/>
                </div>
            </div>
            <AttedanceTable />
        </>
    );
}
