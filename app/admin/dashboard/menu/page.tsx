import Sidebar from "@/components/Sidebar";
import React from "react";
import AddForm from "./AddForm";
import Table from "./Table";

interface pageProps { }

const page: React.FC<pageProps> = () => {
    return (
        <>

            <div style={{ display: 'flex', gap: '30px' }}>

                <div style={{ position: 'absolute', right: '15px' }}>

                    <AddForm>

                        <button style={{ width: '100px', height: '40px', backgroundColor: '#FFAB08', borderRadius: '6px', padding: '5px', border: 'none', color: '#ffffff', fontSize: '16px', fontWeight: '400', cursor: 'pointer' }}>Add +</button>

                    </AddForm>

                </div>

                <Sidebar />

                <Table />

            </div>

        </>
    )
}

export default page;