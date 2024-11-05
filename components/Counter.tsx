"use client"
import React, { useState } from "react";

interface CounterProps {
    onCountChange: any
};

const Counter: React.FC<CounterProps> = ({ onCountChange }) => {

    const [count, setCount] = useState(1);

    const Decrement = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
        onCountChange((prevCount: any) => (prevCount > 0 ? prevCount - 1 : 0))
    }

    const Increment = () => {
        /* setCount(prevCount => prevCount + 1) */
        setCount(prevCount => {
            const newCount = prevCount + 1;
            onCountChange(newCount);
            return newCount;
        })
    }

    return (
        <>

            <div className="w-[84px] h-[40px] bg-[#F2F2F3] rounded-[12px] px-[12px] py-[9px] border-[1px] border-solid border-[#FFFFFF]">

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