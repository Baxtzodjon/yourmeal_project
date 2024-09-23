"use client"
import Link from "next/link"
import React, { useState } from "react"

interface TableProps { }

const Table: React.FC<TableProps> = () => {
    return (
        <>

            <div style={{ display: 'flex', flexDirection: 'column' }}>

                <h1 style={{ color: '#000000', fontSize: '32px', fontWeight: '600' }}>Table Menu</h1>

                {/* <table style={{ width: '1000px', height: '200px', border: '2px solid #FFAB08', padding: '10px' }}>

                    <tr>

                        <th>Image</th>
                        <th>Title</th>
                        <th>Weight</th>
                        <th>Price</th>
                        <th>Composition</th>
                        <th>Description</th>
                        <th>Change</th>
                        <th>Delete</th>

                    </tr>

                    <tr>

                        <td><img src="/images/hamburger_fir.png" alt="" style={{ width: '60px', height: '60px' }} /></td>
                        <td>Hot Burger</td>
                        <td>500 g</td>
                        <td>12$</td>
                        <td>Lorem ipsum dolor sit amet.</td>
                        <td>Lorem ipsum dolor sit amet.</td>
                        <td><button style={{ width: '60px', height: '30px', backgroundColor: '#FFAB08', borderRadius: '6px', padding: '5px', border: 'none', color: '#ffffff', fontSize: '14px', fontWeight: '400', cursor: 'pointer' }}>Change</button></td>
                        <td><button style={{ width: '60px', height: '30px', backgroundColor: '#FFAB08', borderRadius: '6px', padding: '5px', border: 'none', color: '#ffffff', fontSize: '14px', fontWeight: '400', cursor: 'pointer' }}>Delete</button></td>

                    </tr>

                </table> */}

            </div>

        </>
    )

}

export default Table;