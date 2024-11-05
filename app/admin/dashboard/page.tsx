import Sidebar from "@/components/Sidebar";
import React from "react";
import Table from "./menu/Table";

interface pageProps { }

const page: React.FC<pageProps> = () => {

    return (
        <>

            <Sidebar />

            <Table />
        </>
    )
}

export default page;