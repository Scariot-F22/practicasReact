import CrudForm from "./components/CrudForm"
import CrudTable from "./components/CrudTable"
import { useState, useEffect } from "react";
import axios from "axios";

const initialDb = []

const CrudApp = () => {

    const [db, setDb] = useState(initialDb)
    const [editData, setEditData] = useState(null)

    const getData = async ()=>{
        let res = await axios.get("http://localhost:5000/caballeros");
            
        setDb(res.data)
    }

    useEffect(() => {
      getData()
    }, [])
    

    const createData = async (data)=> {
        data.id = Date.now();

        const options ={
            method: "POST",
            headers: { "content-type":"application/json" },
            data: JSON.stringify(data)
        }
        let res = await axios("http://localhost:5000/caballeros", options),
            caballero = await res.data

        setDb([...db, caballero]);
    },

        updateData = async (data)=> {
            // let newData = db.map(el => data.id === el.id ? data : el) no se necesita en el método PUT

            let ENDPOINT = `http://localhost:5000/caballeros/${data.id}`

            const options = {
                method: "PUT",
                headers: { "content-type":"application/json" },
                data: JSON.stringify(data)
            };
            const res = await axios(ENDPOINT, options);
    
            setDb([...db, res.data])
        },

        deleteData = async (id)=> {
            let isDelete = window.confirm(`Estas seguro que quieres eliminar el caballero ${id}?`);

            if (isDelete) {
                let ENDPOINT = `http://localhost:5000/caballeros/${id}`;

                const options ={
                    method: "DELETE",
                    headers: { "content-type":"application/json" },
                };
                const res = await axios(ENDPOINT, options);
                const caballero = await res.data;
        
                setDb([...db, caballero]);
            }else {
                return
            }
            
        };

    return (
        <>
            <h2>CRUD App</h2>
            <CrudForm 
            createData={createData}
            updateData={updateData}
            editData={editData}
            setEditData={setEditData}
            />
            {db && <CrudTable 
            data={db} 
            deleteData={deleteData}
            setEditData={setEditData}
            />}
        </>

    )
}

export default CrudApp