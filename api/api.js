import { useEffect, useState } from "react";

const base_url = "http://localhost:3000/";

const fetcherComponent = (fetcherMethod)=> (state,setter, ...args)=>{
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [rejected,setRejected] = useState(false)

    useEffect(()=>{
        fetcherMethod(...args)
            .then((datas)=>{
                console.log('fetch useffect', datas)
                setData(datas)
                if (setter) setter(datas.data)
                setLoading(false)
                setRejected(false)
            })
            .catch(()=>{
                setLoading(false)
                setRejected(true)
            })
    },[state])

    return [data,loading,rejected]
}

const fetcherMethod = {
    getOne: (resource) => async (id) => {
        const response = await fetch(base_url + resource + "/" + id);
        const data = await response.json();
        return data;
    },
    getAll: (resource) => async (page, perPage) => {
        const response = await fetch(
            base_url + resource + `?_page=${page}&_per_page=${perPage}`,
        );
        const data = await response.json();
        return data;
    },
    updateOne: (resource) => async (id, newData) => {
        const response = await fetch(base_url + resource + "/" + id, {
            method: "PUT",
            body: JSON.stringify({
                ...newData,
            }),
        });
        const data = await response.json();
        return data;
    },
    deleteOne: (resource) => async (id) => {
        const response = await fetch(base_url + resource + "/" + id, {
            method: "DELETE",
        });
        const data = await response.json();
        return data;
    },
    createOne: (resource) => async (data) => {
        const response = await fetch(base_url + resource, {
            method: "POST",
            body: JSON.stringify({
                ...data,
            }),
        });

        const datas = await response.json();
        return datas;
    },
};
async function createAttendance(nip, newData) {
            const latestAttendances =  api.attendances.getOne(nip);
            const reconstructedNewAttendant = {
                id: id,
                attendances: [...latestAttendances.attendances, newData],
            };
            const res =  api.attendances.createOne(reconstructedNewAttendant).json()
            return res
}

async function updateAttendant(employeeId, attendantId, newData) {
    const latestAttendances =  api.attendances.getOne(employeeId);
    const reconstructedUpdatedAttendant = latestAttendances.attendances.map(
        (attendant) => {
            if (attendantId === attendant.attendantId)
            return { attendantId, ...newData };
            return attendant;
        },
    );
    const datas =  fetcherMethod.updateOne("attendances")(employeeId, {
        attendances: reconstructedUpdatedAttendant,
    });
    return datas;
}

const api = {
    employees: {
        getOne: fetcherComponent(fetcherMethod.getOne("employees")),
        getAll: fetcherComponent( fetcherMethod.getAll("employees")),
        deleteOne:fetcherComponent( fetcherMethod.deleteOne("employees")),
        updateOne: fetcherComponent( fetcherMethod.updateOne("employees")),
        createOne: fetcherComponent( fetcherMethod.createOne("employees")),
    },

    attendances: {
        getOne: fetcherComponent( fetcherMethod.getOne("attendances")),
        getAll: fetcherComponent( fetcherMethod.getAll("attendances")),
        deleteOne: fetcherComponent( fetcherMethod.deleteOne("attendances")),
        updateOne: fetcherComponent( updateAttendant ),
        createOne: fetcherComponent( createAttendance ),
    },

};

export default api;
