"use client"
import Link from "next/link"
import React, { useState } from "react"

interface AddFormProps {
    children: React.ReactNode,
}

const AddForm: React.FC<AddFormProps> = ({ children }) => {

    const [isOpenForm, setIsOpenForm] = useState(false)

    async function onSubmit(e: any) {
        e.preventDefault()

        const fm = new FormData(e.target)

        const menu: any = {}

        fm.forEach((val: any, key: any) => (menu[key] = val));

        menu.titles = {
            ru: menu.titles,
            en: menu.titles
        };

        menu.description = {
            ru: menu.description,
            en: menu.description
        };

        menu.images = [menu.images]
        menu.price = Number(menu.price)

        const res = await fetch('http://localhost:3000/api/menu', {
            method: "POST",
            body: JSON.stringify(menu),
            headers: {
                "Content-Type": "application/json"
            }
        })

        console.log(res);

        const data = await res.json()

        console.log(data);
    }

    return (
        <>

            <div onClick={() => setIsOpenForm(true)}>

                {children}

            </div>

            {isOpenForm && (
                <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: '#000000CC' }}>

                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>

                        <div style={{ width: '750px', height: '500px', backgroundColor: '#FF7020', borderRadius: '12px', padding: '20px' }}>

                            <h1 style={{ color: '#ffffff', fontSize: '32px', fontWeight: '600' }}>Product information</h1>

                            <p style={{ color: '#ffffff', fontSize: '18px', fontWeight: '400' }}>Enter the details of your product below.</p>

                            <form action="" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }} onSubmit={onSubmit}>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="img_url" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Image URL</label>

                                    <input type="text" name="images" id="img_url" placeholder="https://example.com/images" style={{ width: '350px', height: '20px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }} />

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="title" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Title</label>

                                    <input type="text" name="titles" id="title" placeholder="Product Title" style={{ width: '350px', height: '20px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }} />

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="weight" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Weight</label>

                                    <input type="text" name="weight" id="weight" placeholder="e.g., 500g" style={{ width: '350px', height: '20px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }} />

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="price" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Price</label>

                                    <input type="text" name="price" id="price" placeholder="$0.00" style={{ width: '350px', height: '20px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }} />

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="composition" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Composition</label>

                                    <textarea name="composition" id="composition" placeholder="Enter product composition" style={{ width: '350px', height: '100px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }}></textarea>

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="description" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Description</label>

                                    <textarea name="description" id="description" placeholder="Enter product description" style={{ width: '350px', height: '100px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }}></textarea>

                                </div>

                                <div>

                                    <button style={{ width: '350px', height: '40px', backgroundColor: '#F2F2F3', borderRadius: '6px', padding: '5px', border: 'none', color: '#808080', fontSize: '16px', fontWeight: '400', cursor: 'pointer' }} onClick={() => setIsOpenForm(false)}>Exit</button>

                                </div>

                                <div>

                                    <Link href="/"><button type="submit" style={{ width: '350px', height: '40px', backgroundColor: '#FFAB08', borderRadius: '6px', padding: '5px', border: 'none', color: '#ffffff', fontSize: '16px', fontWeight: '400', cursor: 'pointer' }}>Submit</button></Link>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>
            )}

        </>
    )
}

export default AddForm;