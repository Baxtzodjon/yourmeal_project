"use client"
import Counter from "@/components/Counter";
import React from "react";

interface ModalWindowProps {
    data: any,
    onClose: any
}

const ModalWindow: React.FC<ModalWindowProps> = ({ data, onClose }) => {

    if (!data) return null;

    return (
        <>

            <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backdropFilter: 'blur(3px)' }}>

                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '684px', height: '432px', borderRadius: '24px', background: '#F0F0F0', display: 'flex' }}>

                    <div style={{ width: '100%', height: 'fit-content', padding: '24px' }}>

                        <button style={{ position: 'absolute', top: '0', right: '6px', color: 'B1B1B1', fontSize: '36px', fontWeight: '100', border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={onClose}>&times;</button>

                        <span style={{ color: '#000000', fontSize: '40px', lineHeight: '48px', fontWeight: '600' }}>{data?.titles['ru']}</span>

                        <div style={{ display: 'flex', gap: '16px'}}>

                            <div style={{ paddingTop: '24px' }}>

                                <img src={`uploads/${data?.images}`} alt="" style={{ width: '276px', height: '220px', borderRadius: '12px', objectFit: 'cover' }} />

                            </div>

                            <div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '38px' }}>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                        <div>

                                            <p style={{ color: '#000000', fontSize: '16px', lineHeight: '21px', fontWeight: '400' }}>{String(data.description?.['ru'])}</p>

                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>

                                            <span style={{ color: '#000000', fontSize: '12px', lineHeight: '16px', fontWeight: '600', paddingBottom: '16px' }}>Состав:</span>

                                            <small style={{ color: '#000000', fontSize: '12px', lineHeight: '16px', fontWeight: '400' }}>{data?.composition}</small>

                                        </div>

                                    </div>

                                    <div>

                                        <span style={{ color: '#000000', fontSize: '24px', lineHeight: '31px', fontWeight: '600' }}>{`${Number(data?.price) + '$'}`}</span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default ModalWindow;