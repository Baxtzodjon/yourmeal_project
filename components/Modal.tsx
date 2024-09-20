"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import Counter from "./Counter";

interface ModalProps {
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    /* const dataPopup = useTranslations("Modal"); */

    return (
        <>

            <div onClick={() => setIsOpenModal(true)}>

                {children}

            </div>

            {isOpenModal && (

                <div className="fixed top-0 left-0 w-full h-full bg-[#000000CC]">

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[684px] h-[432px] rounded-[24px] bg-[#F9F9F9] flex">

                        <div className="w-full p-6">

                            <button className="absolute top-0 right-6 text-[#B1B1B1] text-[36px] font-thin" onClick={() => setIsOpenModal(false)}>&times;</button>

                            <h4 className="text-[#000000] text-[40px] leading-[48px] font-semibold pb-6">Мясная бомба</h4>

                            <div className="flex gap-4">

                                <div className="flex flex-col gap-10">

                                    <Image src="/images/hamburger_fir.png" alt="" width="276" height="220"></Image>

                                    <button className="w-[276px] h-[40px] bg-[#FF7020] rounded-[12px] text-[#FFFFFF] text-[16px] leading-[16px] font-normal">Добавить</button>

                                </div>

                                <div>

                                    <div className="flex flex-col gap-[38px]">

                                        <div className="flex flex-col gap-[10px]">

                                            <div>

                                                <p className="text-[#000000] text-[16px] leading-[21px] font-normal">Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.</p>

                                            </div>

                                            <div className="flex flex-col gap-[2px]">

                                                <span className="text-[#000000] text-[12px] leading-[16px] font-semibold pb-1">Состав:</span>

                                                <small className="text-[#000000] text-[12px] leading-[16px] font-normal">Пшеничная булочка</small>
                                                <small className="text-[#000000] text-[12px] leading-[16px] font-normal">Котлета из говядины</small>
                                                <small className="text-[#000000] text-[12px] leading-[16px] font-normal">Красный лук</small>
                                                <small className="text-[#000000] text-[12px] leading-[16px] font-normal">Листья салата</small>
                                                <small className="text-[#000000] text-[12px] leading-[16px] font-normal">Соус горчичный</small>
                                                <small className="text-[#B1B1B1] text-[12px] leading-[16px] font-normal">520г, ккал 430</small>

                                            </div>

                                        </div>

                                        <div className="flex items-center justify-between">

                                            <Counter />

                                            <span className="text-[#000000] text-[24px] leading-[31px] font-semibold">689₽</span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            )}

        </>
    )
}

export default Modal;