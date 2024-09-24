"use client"
import React, { useEffect, useState } from "react"
import Food from "./Food"
import { Menu } from "@/models/menu"
import Modal from "./Modal"
import Image from "next/image"

// const menuItem: Menu = {
//     _id: '1',
//     titles: { en: 'loremmmipsum' },
//     description: { en: 'Classic' },
//     price: 12.99,
//     weight: '400g',
//     images: [],
//     composition: 'Flour'
// }

const FoodItem = async () => {
    // const [isMeal, setMeal] = useState([])

    /* useEffect(() => {
        fetch('http://localhost:3000/api/menu', {cache: "no-cache"})
            .then(res => res.json())
            .then(data => setMeal(data.data))
            .catch(error => console.error('Ошибка:', error));
    }, []) */

    const [language, setLanguage] = useState('en')
    const languages = ['en', 'ru', 'uz']

    const changeLanguage = (lang:any) => {
        if (language.includes(lang)) {
            setLanguage(lang)
        }
    }

    const res = await fetch('http://localhost:3000/api/menu')
    console.log(res);

    const card_burgers_sec = await res.json()

    // fetch('http://localhost:3000/api/menu')
    //     .then(res => {
    //         console.log(res);
    //         return res.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.error('Ошибка:', error);
    //     })

    return (
        <>

            {/* {isMeal.map((item: Menu) => {
                <Food item={item} />
            })} */}

            {card_burgers_sec.data.map((item:any) => (

                <div className="w-[280px] h-fit-content bg-[#FFFFFF] rounded-[18px] p-3" key={item?._id}>

                    {/* <Image src={`${item?.images}`} alt="" width="276" height="220" className="rounded-[12px]" /> */}

                    <img src={`${item?.images}`} alt="" className="w-[276px] h-[220px] rounded-[12px] object-cover" />

                    <div className="flex flex-col gap-[29px] mt-4">

                        <div className="flex flex-col gap-2">

                            <h5 className="text-[#000000] text-[24px] leading-[24px] font-semibold">{`${Number(item?.price) + '$'}`}</h5>

                            {/* {Number(item?.price)} */}

                            <span className="text-[#000000] text-[16px] leading-[21px] font-normal">{item?.titles[language]}</span>

                        </div>

                        <div className="flex flex-col gap-2">

                            <span className="text-[#B1B1B1] text-[16px] leading-[21px] font-semibold">{item?.weight}</span>

                            <p className="text-[#B1B1B1] text-[16px] leading-[21px] font-normal">{String(item.description?.[language])}</p>

                            <p className="text-[#B1B1B1] text-[16px] leading-[21px] font-normal">{item?.composition}</p>

                            <Modal>

                                <button className="w-full h-[40px] bg-[#F2F2F3] rounded-[12px] text-[#000000] text-[16px] leading-[16px] font-normal">Добавить</button>

                            </Modal>

                        </div>

                    </div>

                </div>

            ))}

        </>
    )
}

export default FoodItem;