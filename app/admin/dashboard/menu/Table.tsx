"use client"
import Modal from "@/components/Modal";
import Link from "next/link"
import { useState } from "react";

const Table = async () => {

    const [language, setLanguage] = useState('en')
    const languages = ['en', 'ru', 'uz']

    const changeLanguage = (lang: any) => {
        if (language.includes(lang)) {
            setLanguage(lang)
        }
    }

    const res = await fetch('http://localhost:3000/api/menu')
    console.log(res);

    const cards_burger = await res.json()

    return (
        <>

            <div style={{ display: 'flex', flexDirection: 'column' }}>

                <h1 style={{ color: '#000000', fontSize: '32px', fontWeight: '600' }}>Card Menu</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>

                    {cards_burger.data.map((item: any) => (

                        <div style={{ width: '280px', height: 'fit-content', backgroundColor: '#FFAB08', borderRadius: '18px', padding: '12px' }} key={item?._id}>

                            <img src={`${item?.images}`} alt="" style={{ width: '276px', height: '220px', borderRadius: '12px', objectFit: 'cover', marginBottom: '15px' }} />

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '29px' }}>

                                {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

                                    <h5 style={{ color: '#000000', fontSize: '24px', lineHeight: '24px', fontWeight: '600' }}>{`${Number(item?.price) + '$'}`}</h5>

                                    <span style={{ color: '#000000', fontSize: '16px', lineHeight: '21px', fontWeight: '400' }}>{item?.titles[language]}</span>

                                </div> */}

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

                                    {/* <span style={{ color: '#B1B1B1', fontSize: '16px', lineHeight: '21px', fontWeight: '600' }}>{item?.weight}</span>

                                    <p style={{ color: '#B1B1B1', fontSize: '16px', lineHeight: '21px', fontWeight: '400' }}>{String(item.description?.[language])}</p>

                                    <p style={{ color: '#B1B1B1', fontSize: '16px', lineHeight: '21px', fontWeight: '400' }}>{item?.composition}</p> */}

                                    <div style={{ display: 'flex', gap: '8px' }}>

                                        <button style={{ width: '140px', height: '40px', backgroundColor: '#F2F2F3', border: 'none', borderRadius: '12px', color: '#000000', fontSize: '16px', lineHeight: '21px', fontWeight: '400', cursor: 'pointer' }}>Добавить</button>

                                        <button style={{ width: '140px', height: '40px', backgroundColor: '#FF7020', border: 'none', borderRadius: '12px', color: '#000000', fontSize: '16px', lineHeight: '21px', fontWeight: '400', cursor: 'pointer' }}>Delete</button>

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