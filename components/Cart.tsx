"use client"
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const Cart = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>

            <div className="w-[300px] h-[467px] bg-[#FFFFFF] py-6 px-4 rounded-[18px]">

                <div>

                    <div className="flex items-center justify-between pb-2 border-b border-solid border-[#F2F2F3]">

                        <h4 className="text-[#000000] text-[24px] leading-[24px] fotn-semibold">Lorem ipsum dolor sit amet.</h4>

                        <span className="flex items-center justify-center w-[41px] h-[20px] bg-[#F2F2F3] rounded-[6px] text-[#000000] text-[12px] leading-[16px] font-normal">3</span>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Cart;