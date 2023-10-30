
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import styles from './nav-bar.module.css';

export default function NavBar(){

    const items: MenuItem[] = [
        {
            label: 'Home'
        },
        {
            label: 'About'
        }
    ];

    const start = <h5>Notes</h5>;
    const end = <InputText placeholder="Search" type="text" className="w-full" />;

    return (
        <div className={styles.card}>
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}