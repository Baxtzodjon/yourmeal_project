"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";

interface PopupProps {
    children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const dataPopup = useTranslations("Popup");

    return (
        <>

            <div onClick={() => setIsOpen(true)}>

                {children}

            </div>

            {isOpen && (

                <div className="fixed top-0 left-0 w-full h-full bg-[#000000CC]">

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[684px] h-[432px] rounded-[24px] bg-[#F9F9F9] flex">

                        <div className="w-[342px] bg-[#FFAB08] rounded-tl-[24px] rounded-bl-[24px] flex items-center justify-center">

                            <Image src="/images/doughnut.png" alt="" width="192" height="205" />

                        </div>

                        <div className="w-[342px] p-6">

                            <button className="absolute top-0 right-6 text-[#B1B1B1] text-[36px] font-thin" onClick={() => setIsOpen(false)}>&times;</button>

                            <h4 className="text-[#000000] text-[24px] leading-[24px] font-semibold pb-4">{dataPopup("delivery_popup")}</h4>

                            <form action="" className="flex flex-col gap-4">

                                <div className="flex items-center flex-col gap-2">

                                    <input type="text" name="name" id="name" placeholder={dataPopup("inp_name")} pattern="[A-Za-zA-Яа-яЁё\s-]{2,30}" title="Имя должно содержать только буквы, пробелы и тире. Должно быть от 2 до 30 символов." className="w-full h-10 bg-[#FFFFFF] rounded-[12px] p-3 border border-solid border-[#F2F2F3] outline-none text-[#B1B1B1] text-[12px] leading-[16px] font-normal" required />

                                    <input type="tel" name="phone" id="phone" placeholder={dataPopup("inp_phone")} className="w-full h-10 bg-[#FFFFFF] rounded-[12px] p-3 border border-solid border-[#F2F2F3] outline-none text-[#B1B1B1] text-[12px] leading-[16px] font-normal" required />

                                </div>

                                <div className="flex flex-col gap-3">

                                    <div className="flex items-center gap-2">

                                        <input type="radio" className="accent-[#000000]" />

                                        <span className="text-[#000000] text-[12px] leading-[17px] font-normal">{dataPopup("inp_rdo")}</span>

                                    </div>

                                    <div className="flex items-center gap-2">

                                        <input type="radio" className="accent-[#000000]" />

                                        <span className="text-[#000000] text-[12px] leading-[17px] font-normal">{dataPopup("delivery_popup")}</span>

                                    </div>

                                </div>

                                <div className="flex flex-col gap-2">

                                    <div>

                                        <input type="text" placeholder={dataPopup("inp_address")} className="w-full h-10 bg-[#FFFFFF] rounded-[12px] p-3 border border-solid border-[#F2F2F3] outline-none text-[#B1B1B1] text-[12px] leading-[16px] font-normal" />

                                    </div>

                                    <div className="flex items-center justify-center gap-2">

                                        <input type="number" placeholder={dataPopup("floor")} className="w-full h-10 bg-[#FFFFFF] rounded-[12px] p-3 border border-solid border-[#F2F2F3] outline-none text-[#B1B1B1] text-[12px] leading-[16px] font-normal" required />

                                        <input type="tel" placeholder={dataPopup("intercom")} className="w-full h-10 bg-[#FFFFFF] rounded-[12px] p-3 border border-solid border-[#F2F2F3] outline-none text-[#B1B1B1] text-[12px] leading-[16px] font-normal" required />

                                    </div>

                                </div>

                                <div className="mt-4">

                                    <button className="w-full h-[40px] bg-[#FF7020] rounded-[12px] text-[#FFFFFF] text-[16px] leading-[16px] font-normal">{dataPopup("design_btn")}</button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            )}

        </>
    )
}

export default Popup;