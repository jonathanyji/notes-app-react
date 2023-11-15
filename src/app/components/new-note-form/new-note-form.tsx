"use client"
import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import 'primeflex/primeflex.css';
import { Notes, NotesService } from '@/app/service/Notes-Service';
import { Button } from 'primereact/button';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function NewNoteFrom() {

    const { user } = useUser();
    const [titleInput, setTitleInput] = useState('');
    const [descInput, setDescInput] = useState('');
 
    const resetForm = () => {
        setTitleInput("");
        setDescInput("");
    }

    const handleSave = () => {
        let submitData: Notes = {
            id: "",
            title: titleInput,
            description: descInput
        }
        console.log("TEST SUBMIT: ", submitData)
        NotesService.createNewNote(submitData, user).then(() => {
            resetForm();
        })
    }

    return (
        <div>
            <div className='row'>
                <div className='col-12 pt-0'>
                    <h2>New Note</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <label htmlFor="title">Title</label>
                </div>
                <div className='col-12'>
                    <InputText value={titleInput} onChange={(e) => setTitleInput(e.target.value)} id="title" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <label htmlFor="title">Title</label>
                </div>
                <div className='col-12'>
                    <InputTextarea value={descInput} onChange={(e) => setDescInput(e.target.value)} id="desc" rows={10} cols={30} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 flex justify-content-end'>
                <Button onClick={handleSave} label="Save" disabled={titleInput === "" || descInput === ""} />
                </div>
            </div>
        </div>
    )
}