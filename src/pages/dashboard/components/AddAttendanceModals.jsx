import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputSelect from "./InputSelect";
import useEmployeesContext from "../hooks/useEmployees";
import api from "../../../../api/api";

const TimePicker = ({ time, onChange }) => {
    if (!time) time = new Date();
    return (
        <DatePicker
            selected={time}
            onChange={(date) => onChange(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={2}
            timeCaption="Time"
            dateFormat="HH:mm "
        />
    );
};

export default function AddAttendanceModal({dialogId}) {
    const [startDate, setStartDate] = useState(new Date());
    const [arrival, setArrival] = useState(new Date());
    const [leave, setLeave] = useState(new Date());
    const [form,setForm] = useState({
        name:'Nama',
        nip:'Nip',
        email: "Email",
        departement : 'departement',
        position : 'job',
        date : new Date(),
        arrival : new Date(),
        leave : new Date(),
    })


    const [employees, setEmployees] = useState([])

    api.employees.getAll(null,setEmployees,1,5);
    const names =employees.map(emp => emp.name) 

    function fillForm(){
         
    }
    return (
        <>
            <dialog id={dialogId} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg sticky">Add Employee Attendance</h3>
                    <hr className='border border-b-black border-solid'/>
                    <div className="w-full flex flex-col items-center gap-y-5">
                        <InputSelect label={"Name"} listName={names} onChange={(event)=>setForm({...form,name:event.target.value})}/>
                        <DisabledInput value={form.nip} label={"NIP"} />
                        <DisabledInput value={form.email} label={"Email"} />
                        <DisabledInput value={form.departement} label={"Departemen"} />
                        <DisabledInput value={form.position} label={"Position"} />

                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label ">
                                    <span className="label-text mx-auto">Date</span>
                                </div>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    peekNextMonth
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                />
                                <input type="time"/>
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

                        <button className="btn bg-primary">Add</button>
                    </div>
                </div>
            </dialog>
        </>
    );
}


function DisabledInput({ value, label }) {
    return (
        <>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">{label}</span>
                </div>
                <input
                    type="text"
                    placeholder="Select name"
                    className="input input-bordered w-full max-w-xs"
                    disabled
                    value={value}
                />
            </label>
        </>
    );
}


