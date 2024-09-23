import Link from "next/link";
import React from "react";

const Sidebar = () => {
    return (
        <>

            <aside style={{ width: '270px', height: '100vh', backgroundColor: '#FFAB08', borderRadius: '12px', padding: '25px' }}>

                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>

                    <Link href="/admin/dashboard/menu" style={{ textDecoration: 'none', marginBottom: '30px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

                            <img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-24.png" alt="" style={{ borderRadius: '100%', backgroundColor: 'white', padding: '5px' }} />

                            <span style={{ color: 'white', fontSize: '24px' }}>Restaurant Dashboard</span>

                        </div>
                    </Link>

                    <Link href="/admin/dashboard/menu" style={{ textDecoration: 'none' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

                            <img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-24.png" alt="" style={{ borderRadius: '100%', backgroundColor: 'white', padding: '5px' }} />

                            <span style={{ color: 'white', fontSize: '24px' }}>Menu</span>

                        </div>
                    </Link>

                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

                            <img src="https://cdn4.iconfinder.com/data/icons/zeir-miscellaneous-007/64/history_orders_recent_transaction-24.png" alt="" style={{ borderRadius: '100%', backgroundColor: 'white', padding: '5px' }} />

                            <span style={{ color: 'white', fontSize: '24px' }}>Orders</span>

                        </div>
                    </Link>

                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

                            <img src="https://cdn1.iconfinder.com/data/icons/100-basic-for-user-interface/32/79-users-24.png" alt="" style={{ borderRadius: '100%', backgroundColor: 'white', padding: '5px' }} />

                            <span style={{ color: 'white', fontSize: '24px' }}>Users</span>

                        </div>
                    </Link>

                </div>

            </aside>

        </>
    )
}

export default Sidebar;