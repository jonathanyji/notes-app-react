import 'primeflex/primeflex.css';
import React, { useState, useEffect, useRef } from 'react';
import { NotesService } from '@/app/service/Notes-Service';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Notes } from '@/app/service/Notes-Service';
import { Menu } from 'primereact/menu';

export default function Page() {

    const menuRight = useRef(null);

    const menuItems = [
        {
            items: [
                {
                    label: 'View',
                    command:(e) => {
                        console.log("VIEW BUTTON CLICKED: ", e)
                        //router.push('/fileupload');
                    }
                },
                {
                    label: 'Update',
                    command:(e) => {
                        //router.push('/fileupload');
                    }
                }
            ]
        }
    ];

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        NotesService.getNotes().then((data) => setNotes(data.slice(0,12)));
    }, []);

    const gridItem = (notes: Notes) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <span className="font-semibold">{notes.title}</span>
                        </div>
                        <div>
                            <Menu model={menuItems} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
                            <Button icon="pi pi-angle-down" rounded text className="mr-2" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
                        </div>
                    </div>
                    <div className="flex flex-wrap align-items-center gap-2 py-5">
                        <div className="flex align-items-center gap-2">
                            <span className="font-light">{ notes.description }</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <DataView value={notes} itemTemplate={gridItem} layout="grid"/>
        </div>
    )
}