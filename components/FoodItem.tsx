"use client"
import React, { useEffect, useState } from "react"
import Food from "./Food"
import { Menu } from "@/models/menu"

// const menuItem: Menu = {
//     _id: '1',
//     titles: { en: 'loremmmipsum' },
//     description: { en: 'Classic' },
//     price: 12.99,
//     weight: '400g',
//     images: [],
//     composition: 'Flour'
// }

const FoodItem = () => {
    const [isMeal, setMeal] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/menu', {cache: "no-cache"})
            .then(res => res.json())
            .then(data => setMeal(data.data))
            .catch(error => console.error('Ошибка:', error));
    }, [])

    return (
        <>

            {isMeal.map((item: Menu) => {
                <Food item={item} />
            })}

        </>
    )
}

export default FoodItem;