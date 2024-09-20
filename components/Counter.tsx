"use client"
import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const Decrement = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
    }

    const Increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>

            <div className="w-[84px] h-[40px] bg-[#F2F2F3] rounded-[12px] px-[12px] py-[9px]">

                <div className="flex items-center justify-between">

                    <span className="text-[#000000] text-[16px] leading-[22px] font-normal select-none cursor-pointer" onClick={Decrement}>-</span>

                    <small className="text-[#000000] text-[16px] leading-[22px] font-normal">{count}</small>

                    <span className="text-[#000000] text-[16px] leading-[22px] font-normal select-none cursor-pointer" onClick={Increment}>+</span>

                </div>

            </div>

        </>
    )
}

export default Counter;