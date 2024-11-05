"use client"

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react"

const Navbar = ({ locale }: { locale: string }) => {

    const t = useTranslations("NavbarLinks");
    const mealtext = useTranslations("HomePage");
    const pathname = usePathname();
    const router = useRouter();

    const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value as string;
        const path = pathname.split("/").slice(2).join("/");
        router.push(`/${newLocale}/${path}`);
    };

    return (
        <>

            <header>

                <div className="yellow_back_mn">

                    <div className="flex items-center justify-center gap-[5px] py-6">

                        <h4 className="text-[#FFFFFF] text-[24px] leading-[22px] font-bold">{mealtext("title")}</h4>

                        <Image src="/icons/kitchen_tools.png" alt="" width="29" height="28" />

                        <div className="absolute top-5 right-4">

                            <select value={locale} onChange={handleLanguageChange} name="" id="" className="w-full bg-white border-2 border-[#FFAB08] text-[#000000] py-2 px-4 rounded leading-tight focus:outline-none focus:border-[#FF7020]">
                                
                                <option value="ru">RU</option>
                                <option value="en">EN</option>
                                <option value="uz">UZ</option>

                            </select>

                        </div>

                        {/* <Link href="/admin/login" target="_blank" className="absolute top-5 right-[100px]"><button className="w-[150px] h-[40px] bg-[#FF7020] rounded-[12px] text-[#FFFFFF] text-[16px] leading-[16px] font-normal truncate">Admin Dashboard</button></Link> */}

                        <Link href="/admin/dashboard" target="_blank" className="absolute top-5 right-[100px]"><button className="w-[150px] h-[40px] bg-[#FF7020] rounded-[12px] text-[#FFFFFF] text-[16px] leading-[16px] font-normal truncate">Admin Dashboard</button></Link>

                    </div>

                    <div className="flex items-center justify-center gap-[58px]">

                        <Image src="/images/hamburger.png" alt="" width="253" height="290" />

                        <div className="flex flex-col gap-[52px]">

                            <div>

                                <h1 className="text-[#FFFFFF] text-[50px] leading-[60px] font-extrabold">{mealtext("description")}</h1>

                                <span className="text-[#FF7020] text-[50px] leading-[60px] font-extrabold">{mealtext("description_sec")}</span>

                            </div>

                            <div>

                                <span className="text-[#FFFFFF] text-[16px] leading-[22px] font-normal">{mealtext("delivery")} <small className="text-[#FFFFFF] text-[16px] leading-[22px] font-semibold">{mealtext("delivery_price")}</small></span>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="w-[1200px] mx-auto">

                    <nav className="flex items-center justify-center gap-6 mt-[40px] mb-[50px]">

                        <Link href={`/${locale}/`} className={`hover:bg-[#FFFFFF] duration-200 ${pathname === `/${locale}/` && "bg-[#FFAB08]"} flex items-center justify-center gap-2 w-[121px] h-[40px] rounded-[40px] px-[14px] py-2 text-[#000000] text-[16px] leading-[22px] font-normal truncate`}><Image src="/icons/sandwich.png" alt="" width="24" height="24" /> {t("burger")}</Link>

                        <Link href={`/${locale}/snacks`} className={`hover:bg-[#FFFFFF] duration-200 ${pathname === `/${locale}/snacks` && "bg-[#FFAB08]"} flex items-center justify-center gap-2 w-[121px] h-[40px] rounded-[40px] px-[14px] py-2 text-[#000000] text-[16px] leading-[22px] font-normal truncate`}><Image src="/icons/bun.png" alt="" width="24" height="24" /> {t("snack")}</Link>

                        {/* <Link href={`/${locale}/snacks`} className="flex items-center justify-center gap-2 w-[121px] h-[40px] bg-[#FFFFFF] rounded-[40px] px-[14px] py-2 text-[#000000] text-[16px] leading-[22px] font-normal truncate hover:bg-[#FFAB08] duration-200"><Image src="/icons/bun.png" alt="" width="24" height="24" /> {t("snack")}</Link> */}

                        <Link href="/" className="flex items-center justify-center gap-2 w-[121px] h-[40px] bg-[#FFFFFF] rounded-[40px] px-[14px] py-2 text-[#000000] text-[16px] leading-[22px] font-normal truncate hover:bg-[#FFAB08] duration-200"><Image src="/icons/hotdog.png" alt="" width="24" height="24" /> {t("hotDogs")}</Link>

                        <Link href="/" className="flex items-center justify-center gap-2 w-[121px] h-[40px] bg-[#FFFFFF] rounded-[40px] px-[14px] py-2 text-[#000000] text-[16px] leading-[22px] font-normal truncate hover:bg-[#FFAB08] duration-200"><Image src="/icons/fastfood.png" alt="" width="24" height="24" /> {t("combo")}</Link>

                        <Link href="/" className="flex items-center justify-center gap-2 w-[121px] h-[40px] bg-[#FFFFFF] rounded-[40px] px-[14px] py-2 text-[#000000] text-[16px] leading-[22px] font-normal truncate hover:bg-[#FFAB08] duration-200"><Image src="/icons/burrito.png" alt="" width="24" height="24" /> {t("shawarma")}</Link>

                        <Link href="/" className="flex items-center justify-center gap-2 w-[121px] h-[40px] bg-[#FFFFFF] rounded-[40px] px-[14px] py-2 text-[#000000] text-[16px] leading-[22px] font-normal truncate hover:bg-[#FFAB08] duration-200"><Image src="/icons/pizza.png" alt="" width="24" height="24" /> {t("pizza")}</Link>

                        <Link href="/" className="flex items-center justify-center gap-2 w-[121px] h-[40px] bg-[#FFFFFF] rounded-[40px] px-[14px] py-2 text-[#000000] text-[16px] leading-[22px] font-normal truncate hover:bg-[#FFAB08] duration-200"><Image src="/icons/noodles.png" alt="" width="24" height="24" /> {t("wok")}</Link>

                        <Link href="/" className="flex items-center justify-center gap-2 w-[121px] h-[40px] bg-[#FFFFFF] rounded-[40px] px-[14px] py-2 text-[#000000] text-[16px] leading-[22px] font-normal truncate hover:bg-[#FFAB08] duration-200"><Image src="/icons/doughnut.png" alt="" width="24" height="24" /> {t("desserts")}</Link>

                        <Link href="/" className="flex items-center justify-center gap-2 w-[121px] h-[40px] bg-[#FFFFFF] rounded-[40px] px-[14px] py-2 text-[#000000] text-[16px] leading-[22px] font-normal truncate hover:bg-[#FFAB08] duration-200"><Image src="/icons/ketchup.png" alt="" width="24" height="24" /> {t("sauces")}</Link>

                    </nav>

                </div>

            </header>

        </>
    )
}

export default Navbar;