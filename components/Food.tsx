import { useTranslations } from "next-intl";
import React from "react";
import Modal from "./Modal";
import Image from "next/image";

type Translation = {
    en: string;
    [key: string]: string;
};

type Menu = {
    _id: string;
    titles: Translation;
    description: Translation;
    price: number;
    weight: string;
    images: string[];
    composition: string;
}

export default function Food({ item }: { item: Menu | undefined }) {

    return (
        <>

            {/* {Menu.map((item, index) => (
                <div className="w-[280px] h-[400px] bg-[#FFFFFF] rounded-[18px] p-3" key={index}>

                    <Image src={item.image} alt="" width="276" height="220" className="rounded-[12px]" />

                    <div className="flex flex-col gap-[29px] mt-4">

                        <div className="flex flex-col gap-2">

                            <h5 className="text-[#000000] text-[24px] leading-[24px] font-semibold">{item.price}</h5>

                            <span className="text-[#000000] text-[16px] leading-[21px] font-normal">{item.name}</span>

                        </div>

                        <div className="flex flex-col gap-2">

                            <span className="text-[#B1B1B1] text-[16px] leading-[21px] font-smeibold">{item.weight}</span>

                            <Modal>

                                <button className="w-full h-[40px] bg-[#F2F2F3] rounded-[12px] text-[#000000] text-[16px] leading-[16px] font-normal">Добавить</button>

                            </Modal>

                        </div>

                    </div>

                </div>
            ))} */}

            <div className="w-[280px] h-[400px] bg-[#FFFFFF] rounded-[18px] p-3" key={item?._id}>

                <Image src={`${item?.images}`} alt="" width="276" height="220" className="rounded-[12px]" />

                <div className="flex flex-col gap-[29px] mt-4">

                    <div className="flex flex-col gap-2">

                        <h5 className="text-[#000000] text-[24px] leading-[24px] font-semibold">{Number(item?.price)}</h5>

                        <span className="text-[#000000] text-[16px] leading-[21px] font-normal">{`${item?.titles}`}</span>

                    </div>

                    <div className="flex flex-col gap-2">

                        <span className="text-[#B1B1B1] text-[16px] leading-[21px] font-smeibold">{item?.weight}</span>

                        <Modal>

                            <button className="w-full h-[40px] bg-[#F2F2F3] rounded-[12px] text-[#000000] text-[16px] leading-[16px] font-normal">Добавить</button>

                        </Modal>

                    </div>

                </div>

            </div>

        </>
    )
}