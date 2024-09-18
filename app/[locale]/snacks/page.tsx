import { getMessages } from "next-intl/server";
import React from "react";

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const messages: any = await getMessages({ locale });
    const title = messages.NavbarLinks.snacksTitle;

    return (
        title
    )
};

const SnacksPage = () => {
    return (
        <>

            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae fugit quia labore iure magni eligendi veritatis natus consectetur quam quisquam tempore ab, nobis nulla deserunt? Labore facere ipsum hic aliquam.</p> */}

        </>
    )
}

export default SnacksPage;