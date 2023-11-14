"use client"
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import styles from './nav-bar.module.css';
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation'
import { useUser } from '@auth0/nextjs-auth0/client';


export default function NavBar() {

    const router = useRouter()
    const { user } = useUser();
    
    const loggedInItems: MenuItem[] = [
        {
            label: 'Home',
            url: '/'
        },
        {
            label: 'Create Note',
            url: '/new-note'
        },
        {
            label: 'About',
            url: '/about'
        }
    ];

    const loggoutItems: MenuItem[] = [
        {
            label: 'About',
            url: '/about'
        }
    ];

    const start = <h5>Notes</h5>;
    const loginButton = <Button onClick={() => router.push('/api/auth/login')} label="Login" severity="success" className="mr-3"></Button>;
    const logoutButton = <Button onClick={() => router.push('/api/auth/logout')} label="Logout" severity="success" className="mr-3"></Button>;

    return (
        <div className={styles.card}>
            {user && (
                <Menubar model={loggedInItems} start={start} end={logoutButton} />
            )}
            {!user && (
                <Menubar model={loggoutItems} start={start} end={loginButton} />
            )}
        </div>
    )
}