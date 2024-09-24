import Cart from "@/components/Cart";
import Counter from "@/components/Counter";
import Food from "@/components/Food";
import FoodItem from "@/components/FoodItem";
import Modal from "@/components/Modal";
import Popup from "@/components/Popup";
import Sidebar from "@/components/Sidebar";
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;

  return (
    title
  )
};

export default function Home() {

  // const res = await fetch('http://localhost:3000/api/menu')
  // console.log(res);

  // const data = await res.json()

  fetch('http://localhost:3000/api/menu')
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    })


  const t = useTranslations("HomePage");
  const mealtext = useTranslations("NavbarLinks");
  const brg_names = useTranslations("BurgerNames");

  const card_burgers = [
    {
      "id": Math.random(),
      "image": "/images/hamburger_fir.png",
      "price": "689₽",
      "name": brg_names("burger_fir"),
      "weight": "520г"
    },
    {
      "id": Math.random(),
      "image": "/images/hamburger_sec.png",
      "price": "550₽",
      "name": brg_names("burger_sec"),
      "weight": "512г"
    },
    {
      "id": Math.random(),
      "image": "/images/hamburger_third.png",
      "price": "639₽",
      "name": brg_names("burger_thr"),
      "weight": "580г"
    },
    {
      "id": Math.random(),
      "image": "/images/hamburger_fourth.png",
      "price": "480₽",
      "name": brg_names("burger_foth"),
      "weight": "470г"
    },
    {
      "id": Math.random(),
      "image": "/images/hamburger_fifth.png",
      "price": "450₽",
      "name": brg_names("burger_fif"),
      "weight": "450г"
    },
    {
      "id": Math.random(),
      "image": "/images/hamburger_sixth.png",
      "price": "560₽",
      "name": brg_names("burger_sixt"),
      "weight": "510г"
    }
  ];

  const cart = [
    {
      "id": Math.random(),
      "image": "/images/hamburger_sec.png",
      "price": "550₽",
      "name": "Супер сырный",
      "weight": "512г"
    },
    {
      "id": Math.random(),
      "image": "/images/french_fries.png",
      "price": "245₽",
      "name": "Картошка фри",
      "weight": "180г"
    },
    {
      "id": Math.random(),
      "image": "/images/hotdog.png",
      "price": "239₽",
      "name": "Жгучий хот-дог",
      "weight": "245г"
    }
  ];

  return (
    <>
      <div>

        <div className="w-[1200px] mx-auto">

          <div className="flex gap-[30px]">

            <div className="w-[300px] h-[467px] bg-[#FFFFFF] py-6 px-4 rounded-[18px]">

              <div>

                <div className="flex items-center justify-between pb-2 border-b border-solid border-[#F2F2F3]">

                  <h4 className="text-[#000000] text-[24px] leading-[24px] fotn-semibold">{t("basket")}</h4>

                  <span className="flex items-center justify-center w-[41px] h-[20px] bg-[#F2F2F3] rounded-[6px] text-[#000000] text-[12px] leading-[16px] font-normal">3</span>

                </div>

                {cart.map((item, index) => (
                  <div className="mt-3" key={index}>

                    <div className="pb-2 border-b border-solid border-[#F2F2F3]">

                      <div className="flex items-center justify-between">

                        <div className="flex gap-[6px]">

                          <div>

                            <Image src={item.image} alt="" width="64" height="52" className="rounded-[8px]" />

                          </div>

                          <div className="flex flex-col">

                            <div className="flex flex-col">

                              <h5 className="text-[#000000] text-[12px] leading-[16px] font-normal">{item.name}</h5>

                              <span className="text-[#B1B1B1] text-[12px] leading-[16px] font-normal">{item.weight}</span>

                            </div>

                            <div>

                              <small className="text-[#000000] text-[12px] leading-[16px] font-normal">{item.price}</small>

                            </div>

                          </div>

                        </div>

                        <Counter />

                      </div>

                    </div>

                  </div>
                ))}

              </div>

              <div>

                <div className="flex items-center justify-between pt-4 pb-6">

                  <h5 className="text-[#000000] text-[16px] leading-[21px] font-normal">{t("total")}</h5>

                  <span className="text-[#000000] text-[16px] leading-[21px] font-normal">1279₽</span>

                </div>

                <div className="flex flex-col gap-2">

                  <Popup>

                    <button className="w-[268px] h-[40px] bg-[#FF7020] rounded-[12px] text-[#FFFFFF] text-[16px] leading-[16px] font-normal">{t("order")}</button>

                  </Popup>

                  <div className="flex items-center gap-2">

                    <Image src="/icons/delivery.png" alt="" width="24" height="24" />

                    <small className="text-[#000000] text-[12px] leading-[16px] font-normal">{t("delivery_sec")}</small>

                  </div>

                </div>

              </div>

            </div>

            <div>

              <h3 className="text-[#000000] text-[40px] leading-[48px] font-semibold pb-6">{mealtext("burger")}</h3>

              <div className="flex flex-col gap-[30px]">

                <div className="grid grid-cols-3 gap-[30px]">

                  {card_burgers.map((item, index) => (
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

                            <button className="w-full h-[40px] bg-[#F2F2F3] rounded-[12px] text-[#000000] text-[16px] leading-[16px] font-normal">{t("add_btn")}</button>

                          </Modal>

                        </div>

                      </div>

                    </div>
                  ))}

                </div>

                <div className="grid grid-cols-3 gap-[30px]">

                  <FoodItem />

                  {/* <Food /> */}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}
