"use client"

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react"

const Footer = ({ locale }: { locale: string }) => {

    const t = useTranslations("HomePage");

    return (
        <>

            <div className="w-full h-[244px] bg-[#FFFFFF] mt-[100px] pt-[51px]">

                <footer className="w-[1200px] mx-auto flex justify-between flex-wrap">

                    <div>

                        <div className="flex flex-col gap-[59px]">

                            <div>

                                <Link href="/"><Image src="/images/logo.png" alt="" width="300" height="58" /></Link>

                            </div>

                            <div className="flex flex-col">

                                <small className="text-[#000000] text-[12px] leading-[16px] font-normal">{t("created")}</small>

                                <span className="text-[#000000] text-[12px] leading-[16px] font-normal">{t("design")}</span>

                            </div>

                        </div>

                    </div>

                    <div className="flex item-center gap-[50px]">

                        <div className="flex flex-col gap-3">

                            <div>

                                <h5 className="text-[#000000] text-[24px] leading-[24px] font-normal">{t("number")}</h5>

                            </div>

                            <div>

                                <a href="tel:+7(930)833-38-11" className="flex items-center gap-[7px]">

                                    <Image src="/icons/telephone.png" alt="" width="18" height="18" />

                                    <span className="text-[#000000] text-[16px] leading-[21px] font-normal">+7(930)833-38-11</span>

                                </a>

                            </div>

                        </div>

                        <div className="flex flex-col gap-[11px]">

                            <div>

                                <h5 className="text-[#000000] text-[24px] leading-[24px] font-normal">{t("social")}</h5>

                            </div>

                            <div className="flex items-center gap-4">

                                <a href="#"><Image src="/icons/social_vk.png" alt="" width="36" height="36" /></a>

                                <a href="#"><Image src="/icons/telegram.png" alt="" width="36" height="36" /></a>

                            </div>

                        </div>

                    </div>

                </footer>

            </div>

        </>
    )
}

export default Footer;