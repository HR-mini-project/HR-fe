import { useState } from "react";
import { ATTENDANCE } from "../constant";
import InputSelect from "./InputSelect";
import InputFile from "./InputFile";

export default function UpdateEmployeeAttendanceModal({dialogId}) {
    const attendanceStatus = Object.values(ATTENDANCE)
    const [arrival, setArrival] = useState(new Date())
    const [leave, setLeave] = useState(new Date())
    return (
        <>
            <dialog id={dialogId} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg sticky">Update Employee Attendance</h3>
                    <hr className='border border-b-black border-solid'/>
                    <div className="w-full flex flex-col items-center gap-y-5">
                        <InputSelect label={"Name"} listName={attendanceStatus} />
                        <DisabledInput value={"test"} label={"NIP"} />
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                        />
                    </div>
                        
                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label ">
                                    <span className="label-text mx-auto">Date</span>
                                </div>
                            </label>
                        </div>

                        <div className=" flex">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text mx-auto">Arrival</span>
                                </div>
                                <TimePicker time={arrival} onChange={(e) => setArrival(e)} />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text mx-auto">Leave</span>
                                </div>
                                <TimePicker time={leave} onChange={(e) => setLeave(e)} />
                            </label>
                        </div>
                        <InputFile text={"Document"} onChange={test} pdf={'t'}/>
                        
                        <button className="btn bg-primary">Add</button>
                </div>
            </dialog>
    </> 
    );
}


