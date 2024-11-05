"use client"
import Modal from "@/components/Modal";
import Link from "next/link"
import { useEffect, useState } from "react";
import Change from "./Change";
import ModalWindow from "./ModalWindow";

const Table = () => {

    const [language, setLanguage] = useState('en')
    const languages = ['en', 'ru', 'uz']
    const [menuControl, setMenuControl] = useState([]);
    const [message, setMessage] = useState('');
    const [selectedData, setSelectedData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMarkerClick = (item: any) => {
        setSelectedData(item)
        setIsModalOpen(true)
    }

    const handleDelete = async (id: any) => {

        try {
            const response = await fetch(`/api/menu/${id}`, { /* 66fd3706b587cff400e76f0a */
                method: 'DELETE',
            });

            const data = await response.json();

            if (data.success) {
                setMessage(data.message);
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('Error deleting menu.');
        }
    };

    const changeLanguage = (lang: any) => {
        if (language.includes(lang)) {
            setLanguage(lang)
        }
    }

    // const res = await fetch('http://localhost:3000/api/menu')
    // console.log(res);

    // const cards_burger = await res.json()

    useEffect(() => {
        fetch('http://localhost:3000/api/menu')
            .then((res) => res.json())
            .then((data) => {
                setMenuControl(data.data)
                console.log(data.data);
            })
            .catch(error => {
                console.error('Ошибка:', error);
            })
    }, [])

    return (
        <>

            <div style={{ display: 'flex', flexDirection: 'column' }}>

                <h1 style={{ color: '#000000', fontSize: '32px', fontWeight: '600' }}>Card Menu</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>

                    {menuControl.map((item: any) => (

                        <div style={{ width: '280px', height: 'fit-content', backgroundColor: '#FFAB08', borderRadius: '18px', padding: '12px' }} key={item?._id}>

                            <img src={`uploads/${item?.images}`} alt="" style={{ width: '276px', height: '220px', borderRadius: '12px', objectFit: 'cover' }} />

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '29px' }}>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

                                    <span style={{ color: '#000000', fontSize: '24px', lineHeight: '24px', fontWeight: '600' }}>{`${Number(item?.price) + '$'}`}</span>

                                    <span style={{ color: '#000000', fontSize: '16px', lineHeight: '21px', fontWeight: '400' }}>{item?.titles[language]}</span>

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

                                    <span style={{ color: '#FF7020', fontSize: '16px', lineHeight: '21px', fontWeight: '600' }}>{item?.weight}</span>

                                    {/* <p style={{ color: '#B1B1B1', fontSize: '16px', lineHeight: '21px', fontWeight: '400' }}>{String(item.description?.[language])}</p>

                                    <p style={{ color: '#B1B1B1', fontSize: '16px', lineHeight: '21px', fontWeight: '400' }}>{item?.composition}</p> */}

                                    <div style={{ display: 'flex', gap: '8px' }}>

                                        {isModalOpen && (
                                            <ModalWindow data={selectedData} onClose={() => {
                                                setIsModalOpen(false)
                                            }} />
                                        )}

                                        <button style={{ width: '100%', height: '40px', backgroundColor: '#F2F2F3', border: 'none', borderRadius: '12px', color: '#000000', fontSize: '16px', lineHeight: '21px', fontWeight: '400', cursor: 'pointer' }} onClick={() => handleMarkerClick(item)}>Посмотреть</button>

                                        <Change id={item?._id}>

                                            <button style={{ width: '100%', height: '40px', backgroundColor: '#FF7020', border: 'none', borderRadius: '12px', color: '#FFFFFF', fontSize: '16px', lineHeight: '21px', fontWeight: '400', cursor: 'pointer' }}>Изменить</button>

                                        </Change>

                                        <button onClick={() => handleDelete(item?._id)} style={{ width: '100%', height: '40px', backgroundColor: '#D32F2F', border: 'none', borderRadius: '12px', color: '#FFFFFF', fontSize: '16px', lineHeight: '21px', fontWeight: '400', cursor: 'pointer' }}>Удалить</button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </>
    )

}

export default Table;