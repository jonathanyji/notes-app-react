"use client"
import 'primeflex/primeflex.css';
import React, { useState, useEffect, useRef } from 'react';
import { NotesService } from '@/app/service/Notes-Service';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Notes } from '@/app/service/Notes-Service';
import { Dialog } from 'primereact/dialog';

export default function Home() {
    const [notesDetailsVisible, setNotesDetailsVisible] = useState(false);
    const [selectedNote, setSelectedNote] = useState<Notes | null>(null);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        NotesService.getNotes().then((data) => setNotes(data.slice(0,12)));
    }, []);

    const showNoteDetails = (note: Notes) => {
        console.log("THIS IS CALLED: ", note)
        setSelectedNote(note);
        setNotesDetailsVisible(true);
    };

    const deleteNote = (note: Notes) => {
        console.log("Delete: ", note)
    }

    const gridItem = (notes: Notes) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <span className="font-semibold">{notes.title}</span>
                        </div>
                        <div>
                            <Button icon="pi pi-angle-right" rounded text onClick={() => showNoteDetails(notes)}></Button>
                            <Button icon="pi pi-delete-left" rounded text onClick={() => deleteNote(notes)}></Button>
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
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                <div className="p-4 border-1 surface-border surface-card border-round flex justify-content-center">
                    <Button icon="pi pi-plus" rounded text></Button>
                </div>
            </div>
            <DataView value={notes} itemTemplate={gridItem} layout="grid"/>
            {selectedNote && (
                <Dialog
                    header={selectedNote.title}
                    visible={notesDetailsVisible}
                    style={{ width: '50vw' }}
                    onHide={() => setNotesDetailsVisible(false)}
                >
                    <p className="m-0">{selectedNote.description}</p>
                </Dialog>
            )}
        </div>
    )
}