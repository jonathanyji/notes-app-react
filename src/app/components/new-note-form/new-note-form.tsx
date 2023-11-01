import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import 'primeflex/primeflex.css';

export default function NewNoteFrom() {
    const [value, setValue] = useState('');

    

    return (
        <div className="card">
            <div className="row">
                <div className='col-4'>
                    <label htmlFor="title">Title</label>
                </div>
                <div className='col-8'>
                    <InputText id="title" aria-describedby="title-help" />
                </div>
            </div>
            <div className='row'>
                <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
            </div>
        </div>
    )
}