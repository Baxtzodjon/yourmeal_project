"use client"
import Link from "next/link";
import React, { useState } from "react";

interface pageProps { }

const page: React.FC<pageProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function onSubmitLoginUser(e: any) {
        e.preventDefault();

        const fm = new FormData(e.target)

        const users: any = {}

        fm.forEach((val: any, key: any) => users[key] = val)

        const res = await fetch('http://localhost:3000/api/users', {
            method: "POST",
            body: JSON.stringify(users),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    return (
        <>

            <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%' }}>

                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '648px', height: 'fit-content', borderRadius: '24px', backgroundColor: '#F9F9F9', border: '2px solid #FF7020', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 15px 20px rgba(0, 0, 0, 0.2)' }}>

                    <div style={{ width: '100%', height: 'fit-content', padding: '36px' }}>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '30px' }}>

                            <span style={{ color: '#000', fontSize: '48px', fontWeight: '600' }}>Login</span>

                        </div>

                        <form action="" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', gap: '30px' }} onSubmit={onSubmitLoginUser}>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

                                <label htmlFor="email" style={{ color: '#FFAB08', fontSize: '18px', fontWeight: '600' }}>Email</label>

                                <input type="email" name="email" id="email" placeholder="Email" style={{ width: '300px', height: '40px', borderRadius: '12px', border: '2px solid #FF7020', padding: '4px', fontSize: '18px', fontWeight: '600', outline: 'none' }} required />

                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

                                <label htmlFor="password" style={{ color: '#FFAB08', fontSize: '18px', fontWeight: '600' }}>Password</label>

                                <input type="password" name="password" id="password" placeholder="Password" style={{ width: '300px', height: '40px', borderRadius: '12px', border: '2px solid #FF7020', padding: '4px', fontSize: '18px', fontWeight: '600', outline: 'none' }} required />

                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

                                {/* <Link href="/admin/dashboard"><button style={{ width: '300px', height: '40px', border: 'none', borderRadius: '12px', background: '#FF7020', padding: '4px', color: '#ffffff', fontSize: '18px', fontWeight: '600', cursor: 'pointer' }}>Заходить</button></Link> */}

                                {/* <button style={{ width: '300px', height: '40px', border: 'none', borderRadius: '12px', background: '#FF7020', padding: '4px', color: '#ffffff', fontSize: '18px', fontWeight: '600', cursor: 'pointer' }}>Sign Up</button> */}

                                <button type="submit" style={{ width: '300px', height: '40px', border: 'none', borderRadius: '12px', background: '#FF7020', padding: '4px', color: '#ffffff', fontSize: '18px', fontWeight: '600', cursor: 'pointer' }}>Sign In</button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </>
    )
}

export default page;