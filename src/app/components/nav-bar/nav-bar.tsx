"use client"
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import styles from './nav-bar.module.css';
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation'

export default function NavBar() {

    const router = useRouter()

    const items: MenuItem[] = [
        {
            label: 'Home',
            url: '/'
        },
        {
            label: 'About',
            url: '/about'
        }
    ];

    const start = <h5>Notes</h5>;
    const end = <Button onClick={() => router.push('/new-note')} label="Create Note" severity="success" className="mr-3"></Button>;

    return (
        <div className={styles.card}>
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}