"use client"
import React, { useEffect, useState } from "react"

interface ChangeProps {
    children: React.ReactNode,
    id: any
}

const Change: React.FC<ChangeProps> = ({ children, id }) => {
    const [image, setImage] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [ischangeModal, setChangeModal] = useState(false);
    const [formData, setFormData] = useState({
        images: '',
        titles: { ru: '', en: '' },
        weight: '',
        price: Number,
        composition: '',
        description: { ru: '', en: '' }
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (e.target.files) {
            setFile(e.target.files[0]);
            setImage(URL.createObjectURL(e.target.files[0]))
        }
    };

    /* const handleChangeSecond = (e: any) => {

        if (e.target.files) {
            setFile(e.target.files[0]);
            setImage(URL.createObjectURL(e.target.files[0]))
        }
    } */

    const handleChangeTitles = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
    
        if (name.startsWith('titles.')) {
            const lang = name.split('.')[1] as 'ru' | 'en'; // Получаем язык
            setFormData(prevState => ({
                ...prevState,
                titles: {
                    ...prevState.titles,
                    [lang]: value
                }
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleChangeDescription = (e: any) => {
        const { name, value } = e.target;
    
        if (name.startsWith('description.')) {
            const lang = name.split('.')[1] as 'ru' | 'en'; // Получаем язык
            setFormData(prevState => ({
                ...prevState,
                description: {
                    ...prevState.description,
                    [lang]: value
                }
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleEditSubmit = async (e: any) => {
        e.preventDefault();

        const res = await fetch(`/api/menu/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), // Отправляем только изменяемые поля
        });

        const result = await res.json();
        alert(result.message);
    };

    /* const handleEditSubmit = async (e: any) => {
        e.preventDefault();

        if (!file) {
            alert("Пожалуйста выбирите фалй.")
            return
        }

        const formDataToSend = new FormData();

        formDataToSend.append('images', file.name);

        formDataToSend.append('images', file);
        formDataToSend.append('titles', JSON.stringify(formData.titles));
        formDataToSend.append('weight', formData.weight);
        formDataToSend.append('price', formData.price.toString());
        formDataToSend.append('composition', formData.composition);
        formDataToSend.append('description', JSON.stringify(formData.description));
    
        const res = await fetch(`/api/menu/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(formDataToSend),
        });

        const resultText = await res.text();

        console.log("Ответ сервера:", resultText);

        try {
            const result = JSON.parse(resultText);
            alert(result.message);
        } catch (error) {
            console.error("Ошибка парсинга JSON:", error);
            alert("Ошибка сервера: " + resultText);
        }
    }; */

    return (
        <>

            <div onClick={() => setChangeModal(true)}>

                {children}

            </div>

            {ischangeModal && (
                <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: '#000000CC' }}>

                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>

                        <div style={{ width: '750px', height: 'fit-content', backgroundColor: '#FF7020', borderRadius: '12px', padding: '20px' }}>

                            <h1 style={{ color: '#ffffff', fontSize: '32px', fontWeight: '600' }}>Product information</h1>

                            {/* <p style={{ color: '#ffffff', fontSize: '18px', fontWeight: '400' }}>Change the details of your product below.</p> */}

                            <form action="" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }} onSubmit={handleEditSubmit}>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="img_url" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Upload Image</label>

                                    <input type="file" accept="image/*" name="images" id="img_url" style={{ width: '350px', height: '20px', padding: '5px' }} required onChange={handleChange} />

                                    {/* <img src="/images/hamburger_fir.png" alt="" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '12px' }} /> */}

                                    {image && <img src={image} alt="" style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '12px' }} />}

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="title.ru" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Title in Ru</label>

                                    <input type="text" name="titles.ru" id="title.ru" placeholder="Product Title In Russian" style={{ width: '350px', height: '20px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }} required onChange={handleChangeTitles} />

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="title.en" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Title in En</label>

                                    <input type="text" name="titles.en" id="title.en" placeholder="Product Title In English" style={{ width: '350px', height: '20px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }} required onChange={handleChangeTitles} />

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="weight" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Weight</label>

                                    <input type="text" name="weight" id="weight" placeholder="e.g., 500g" style={{ width: '350px', height: '20px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }} required onChange={handleChange} />

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="price" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Price</label>

                                    <input type="number" name="price" id="price" placeholder="$0.00" style={{ width: '350px', height: '20px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }} required onChange={handleChange} />

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="composition" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Composition</label>

                                    <textarea name="composition" id="composition" placeholder="Enter product composition" style={{ width: '350px', height: '100px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }} required onChange={handleChange}></textarea>

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="description.ru" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Description in Ru</label>

                                    <textarea name="description.ru" id="description.ru" placeholder="Enter product description in Russian" style={{ width: '350px', height: '100px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }} required onChange={handleChangeDescription}></textarea>

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="description.en" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Description in En</label>

                                    <textarea name="description.en" id="description.en" placeholder="Enter product description in English" style={{ width: '350px', height: '100px', borderRadius: '6px', padding: '5px', outline: 'none', border: 'none' }} required onChange={handleChangeDescription}></textarea>

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <label htmlFor="category" style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>Type</label>

                                    <select name="" id="category" style={{ width: '360px', backgroundColor: '#ffffff', border: '2px solid #FFAB08', color: '#000000', padding: '8px 16px 8px 16px', borderRadius: '4px', lineHeight: '20px', outline: 'none' }} required>

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

                                        <button style={{ width: '360px', height: '40px', backgroundColor: '#F2F2F3', borderRadius: '6px', padding: '5px', border: 'none', color: '#808080', fontSize: '16px', fontWeight: '400', cursor: 'pointer' }} onClick={() => setChangeModal(false)}>Exit</button>

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

        </>
    )
}

export default Change;