"use client"
import 'primeflex/primeflex.css';
import React, { useState, useEffect } from 'react';
import { NotesService } from '@/app/service/Notes-Service';
import { Button } from 'primereact/button';
import { Notes } from '@/app/service/Notes-Service';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import  Router   from 'next/router'


export default function NotesHome() {
    
    const [data, setData] = useState<Notes[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        NotesService.getNotes().then(res => {
            console.log("TEST DATA: ", res)
            setData(res)
            setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (data.length === 0) return <p>No profile data</p>;

    const actionButtonTemplate = (rowData: Notes) => {
        return (
            <div className="col-12">
                <Button onClick={() => viewNote(rowData)} label="View" severity="success" className="mr-3"></Button>
                <Button onClick={() => editNote(rowData)} label="Edit" className="mr-3"></Button>
                <Button onClick={() => deleteNote(rowData)} label="Delete" severity="danger"></Button>
            </div>
        )
    }

    const viewNote = (selectedNote: Notes) => {
        Router.push({
            pathname: '/view-note',
            query: {
                id: selectedNote.id,
                title: selectedNote.title,
                description: selectedNote.description
            }

        });
        console.log("View: ", selectedNote)
    }

    const editNote = (selectedNote: Notes) => {
        console.log("Edit: ", selectedNote)
    }

    const deleteNote = (selectedNote: Notes) => {
        console.log("Delete: ", selectedNote)
    }

    return (
        <div>

            <div className="card pl-6 pr-6 mt-6">
                <DataTable value={data} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="title" header="Title" style={{ width: '25%' }}></Column>
                    <Column field="description" header="Description" style={{ width: '25%' }}></Column>
                    <Column header="Actions" body={actionButtonTemplate} style={{ width: '25%' }}></Column>
                </DataTable>
            </div>

        </div>
    )
}