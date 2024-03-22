import { useEffect, useState } from "react";
import { Profile } from "./Profile";
import InputFile from "./InputFile";
import api from "../../../../api/api";
import { useEmployeeNipDetailContext } from "../hooks/useEmployeeDetail";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import useContentContext from "../hooks/useContent";
import { CONTENT } from "../constant";

export default function EmployeeEdit() {
    const {setContent}=useContentContext()

    const [password, updatePassword] = useState();
    const [position, updatePosition] = useState();
    const [departemen, updateDepartemen] = useState();
    const [email, updateEmail] = useState();
    const [name, updateName] = useState();
    const [cv, updateCv] = useState();
    const [portofolio, updatePortofolio] = useState();
    const [otherDocument, updateOtherDocument] = useState();

    const { employeeNip } = useEmployeeNipDetailContext();
    const [employee, setEmployee] = useState("");

    useEffect(() => {
        const fetcher = async () => {
            const emp = await api.employees.getOne(employeeNip);
            setEmployee(emp);
            updatePosition(emp.job);
            updateDepartemen(emp.departement);
            updateName(emp.name);
            updateEmail(emp.email);
            updateCv(emp.cv);
            updatePortofolio(emp.portofolio);
            updateOtherDocument(emp.other_document);
        };
        fetcher();
    }, [employeeNip]);


    function saveHandle(nip) {
        toast('Update successfull')
        setTimeout(()=>setContent(CONTENT.EMPLOYEE_DATA),1500)
        // api.employees.updateOne(nip,{
        //     name:name,
        //     departement : departemen,
        //     email: email,
        //     cv:cv,
        //     portofolio:portofolio,
        //     other_document:otherDocument,
        //     job:position,
        // })
    }

    return (
    <>
            <ToastContainer/>
        <div className="w-full flex flex-col">
                <div className="mx-auto w-1/2">
                    <Profile
                        name={employee.name}
                        email={employee.email}
                        position={employee.job}
                        departemen={employee.departement}
                        img={employee.img}
                    />
                    <Input label={"Name"} value={name} onChange={updateName} />
                    <Input label={"Email"} value={email} onChange={updateEmail} />
                    <Input
                        label={"Departemen"}
                        value={departemen}
                        onChange={updateDepartemen}
                    />
                    <Input
                        label={"Position"}
                        value={position}
                        onChange={updatePosition}
                    />
                    <Input
                        type={"password"}
                        label={"Update password"}
                        value={password}
                        onChange={updatePassword}
                    />

                    <InputFile value={cv} text={"Cv"} onChange={updateCv} pdf={cv} />
                    <InputFile
                        value={portofolio}
                        text={"Portofolio"}
                        onChange={updatePortofolio}
                        pdf={portofolio}
                    />
                    <InputFile
                        value={otherDocument}
                        text="Other document"
                        onChange={updateOtherDocument}
                        pdf={otherDocument}
                    />

                    <div className="flex justify-end my-3">
                        <button className="btn btn-netral" onClick={()=>saveHandle()}>Save</button>
                    </div>
                </div>
            </div>
        </>
    );
}

function Input({ label, value, onChange, type }) {
    if (!type) type = "text";

    return (
        <>
            <div className="flex flex-col ">
                <label className="form-control w-full mx-auto">
                    <div className="label">
                        <span className="label-text ">{label}</span>
                    </div>
                    <input
                        type={type}
                        placeholder="Type here"
                        className="input input-bordered w-full "
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    />
                </label>
            </div>
        </>
    );
}
