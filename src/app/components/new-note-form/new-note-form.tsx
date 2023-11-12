"use client"
import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import 'primeflex/primeflex.css';

export default function NewNoteFrom() {
    const [titleInput, setTitleInput] = useState('');
    const [descInput, setDescInput] = useState('');

    const handleSave = () => {
        let submitData = {
            title: titleInput,
            description: descInput
        }
        console.log("TEST SUBMIT: ", submitData)
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
                    <button onClick={handleSave} type="button" className="bg-primary border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">Save</button>
                </div>
            </div>
        </div>
    )
}