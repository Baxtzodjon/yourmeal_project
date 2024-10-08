"use client"
import Link from "next/link"
import React, { useState } from "react"

interface AddFormProps {
    children: React.ReactNode,
}

const AddForm: React.FC<AddFormProps> = ({ children }) => {

    const [isOpenForm, setIsOpenForm] = useState(false)
    const [file, setFile] = useState<File | null>(null);
    const [image, setImage] = useState<string | null>(null);
    const [message, setMessage] = useState("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
            setImage(URL.createObjectURL(event.target.files[0]))
        }
    };

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

        if (!file) {
            setMessage("Please select a file.");
            return;
        }

        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch("/api/menu/upload", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                setMessage(errorData.message || "Image upload failed");
                return;
            }

            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            setMessage("Something went wrong: " + error);
        }
    }

    /* const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!file) {
            setMessage("Plase select a file.");
            return;
        }

        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch("/api/menu/upload", {
                method: "POST",
                body: formData,
            });

            if(!response.ok) {
                const errorData = await response.json();
                setMessage(errorData.message || "Image upload failed");
                return;
            }

            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            setMessage("Something went wrong: " + error);
        }
    }; */

    return (
        <>

            <div onClick={() => setIsOpenForm(true)}>

                {children}

            </div>

            {isOpenForm && (
                <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: '#000000CC' }}>

                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>

                        <div style={{ width: '750px', height: 'fit-content', backgroundColor: '#FF7020', borderRadius: '12px', padding: '20px' }}>

                            <h1 style={{ color: '#ffffff', fontSize: '32px', fontWeight: '600' }}>Product information</h1>

                            <p style={{ color: '#ffffff', fontSize: '18px', fontWeight: '400' }}>Enter the details of your product below.</p>

                            <form action="" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }} onSubmit={onSubmit}>

                                {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="img_url" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Image URL</label>

                                    <input type="text" name="images" id="img_url" placeholder="https://example.com/images" style={{ width: '350px', height: '20px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }} required />

                                </div> */}

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="img_url" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Upload Image</label>

                                    <input type="file" accept="image/*" name="images" id="img_url" style={{ width: '350px', height: '20px', padding: '5px' }} required onChange={handleFileChange} />

                                    {message && <p>{message}</p>}

                                    {image && <img src={image} alt="" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '12px' }} />}

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="title" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Title</label>

                                    <input type="text" name="titles" id="title" placeholder="Product Title" style={{ width: '350px', height: '20px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }} required />

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="weight" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Weight</label>

                                    <input type="text" name="weight" id="weight" placeholder="e.g., 500g" style={{ width: '350px', height: '20px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }} required />

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="price" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Price</label>

                                    <input type="number" name="price" id="price" placeholder="$0.00" style={{ width: '350px', height: '20px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }} required />

                                    {/* <input type="text" name="price" id="price" placeholder="$0.00" style={{ width: '350px', height: '20px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }} /> */}

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="composition" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Composition</label>

                                    <textarea name="composition" id="composition" placeholder="Enter product composition" style={{ width: '350px', height: '100px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }} required></textarea>

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="description" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Description</label>

                                    <textarea name="description" id="description" placeholder="Enter product description" style={{ width: '350px', height: '100px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }} required></textarea>

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="description" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Type</label>

                                    <select name="" id="" style={{ width: '360px', backgroundColor: '#ffffff', border: '2px solid #FFAB08', color: '#000000', padding: '8px 16px 8px 16px', borderRadius: '4px', lineHeight: '20px', outline: 'none' }} required>

                                        <option value="burgers">Burgers</option>
                                        <option value="snacks">Snacks</option>
                                        <option value="hotdogs">Hot-dogs</option>
                                        <option value="combo">Combo</option>
                                        <option value="shawarma">Shawarma</option>
                                        <option value="pizza">Pizza</option>
                                        <option value="wok">Wok</option>
                                        <option value="desserts">Desserts</option>
                                        <option value="sauces">Sauces</option>

                                    </select>

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <div>

                                        <button style={{ width: '360px', height: '40px', backgroundColor: '#F2F2F3', borderRadius: '6px', padding: '5px', border: 'none', color: '#808080', fontSize: '16px', fontWeight: '400', cursor: 'pointer' }} onClick={() => setIsOpenForm(false)}>Exit</button>

                                    </div>

                                    <div>

                                        <button type="submit" style={{ width: '360px', height: '40px', backgroundColor: '#FFAB08', borderRadius: '6px', padding: '5px', border: 'none', color: '#ffffff', fontSize: '16px', fontWeight: '400', cursor: 'pointer' }}>Submit</button>

                                    </div>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>
            )}

            {/* <form action="" onSubmit={handleSubmit}>

                <label htmlFor="img_url" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Upload Image</label>

                <input type="file" accept="image/*" name="images" id="img_url" style={{ width: '350px', height: '20px', padding: '5px' }} required onChange={handleFileChange} />

                {message && <p>{message}</p>}

                {image && <img src={image} alt="" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '12px' }} />}

                <button type="submit">Submit image</button>

            </form> */}

        </>
    )
}

export default AddForm;