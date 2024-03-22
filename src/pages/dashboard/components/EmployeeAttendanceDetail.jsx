import { useEffect } from "react";
import { useEmployeeNipDetailContext } from "../hooks/useEmployeeDetail";
import InputFile from "./InputFile";
import InputSelect from "./InputSelect";
import api from "../../../../api/api";
import { Modal, Button } from "flowbite-react";
import useEmployeeDetailAttendance from "../hooks/useEmployeeAttendanceContent";

function isToday(strDate) {
    const [day, month, year] = strDate.split("/");
    const compareThisDate = new Date(year, parseInt(month) - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return today.toISOString() === compareThisDate.toISOString();
}

export default function EmployeeAttendanceDetailModal({
    show,
    onClose,
    disable,
    employeeNip,
    onUpdate,
}) {
    if (disable === null) disable = true;
    const [employee] = api.employees.getOne(
        employeeNip,
        null,
        employeeNip,
    );
    const [attendances] = api.attendances.getOne(
        employeeNip,
        null,
        employeeNip,
    );

    if (!employee || !attendances) return null;

    const attendant =  attendances.attendances.filter(e => isToday(e.date)) [0]

    // belum di handle
    if (!attendant)  return '' 
    const [day,month,year] = attendant.date.split('/') 
    const contoh = ["habil", "gans"];
    const header = disable ? "Employee Attendance" : "Update Employee Attendance";


    return (
        <>
            <Modal dismissible show={show} onClose={() => onClose()}>
                <Modal.Header className="bg-biru_gelap">
                    <p className=" text-white">{header}</p>
                </Modal.Header>
                <Modal.Body className="bg-hitam">
                    <div className="flex flex-col items-center gap-2">
                        <InputSelect
                            label={"Kategori Alasan"}
                            listName={contoh}
                            centerLabel={true}
                            disable={disable}
                            value={ attendant.status }
                        />

                        <div className="flex flex-col items-center">
                            <label htmlFor={"date" + employeeNip}>Date</label>
                            <input
                                name={"date" + employeeNip}
                                type="date"
                                className="rounded-md bg-hitam"
                                disabled={disable}
                                value={`${ year }-${ month }-${ day }`}
                            />
                        </div>

                        <div className="flex gap-x-10">
                            <InputTime value={attendant.arrival} labelText="arrival" disable={disable} />
                            <InputTime value={attendant.leave} labelText="leave" disable={disable} />
                        </div>
                        <InputFile text="Supporting document" disable={disable} />
                        <textarea
                            className="textarea textarea-primary"
                            cols="30"
                            rows="4"
                            placeholder="Bio"
                            disabled={disable}
                            value = {attendant.reason ? attendant.reason : "Tidak ada alasan"}
                        ></textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer
                    className={`bg-biru_gelap flex justify-end ${
disable ? "hidden" : null
}`}
                >
                    <Button onClick={() => onclose()}>Decline</Button>

                    <Button className="bg-[#0b3541]" onClick={() => onUpdate()}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function InputTime({ labelText, disable, value }) {
    return (
        <div className="flex flex-col items-center">
            <label htmlFor={labelText}> {labelText} </label>
            <input
                name={labelText}
                type="time"
                className="rounded-md bg-hitam"
                disabled={disable}
                value={value}
            />
        </div>
    );
}
