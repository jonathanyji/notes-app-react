import { MeService, TokenResponseHeader } from "./Me-Service";
import { NotesApiService } from "./api/NotesApiService";

export const NotesService = {
    getNotesDummyData(): Notes[] {
        return [
            {
                id: '1',
                title: 'This is title',
                description: 'this is description'
            },
            {
                id: '2',
                title: 'This is title 2',
                description: 'this is description 2'
            },
            {
                id: '3',
                title: 'This is title 3',
                description: 'this is description 3'
            },
            {
                id: '4',
                title: 'This is title 5',
                description: 'this is description 4'
            },
            {
                id: '5',
                title: 'This is title 6',
                description: 'this is description 5'
            },
            {
                id: '6',
                title: 'This is title 7',
                description: 'this is description 6'
            },
            {
                id: '7',
                title: 'This is title 8',
                description: 'this is description 7'
            },
            {
                id: '8',
                title: 'This is title 9',
                description: 'this is description 8'
            },
            {
                id: '9',
                title: 'This is title 10',
                description: 'this is description 9'
            },
            {
                id: '10',
                title: 'This is title 11',
                description: 'this is description 10'
            }
        ]
    },

    getNotes(): Promise<Notes[]> {
        return Promise.resolve(this.getNotesDummyData());
    },

    async getAllNotes(user: any) {
        return MeService.getTokenResponseHeader(user).then(async token => {
            return NotesApiService.listNotesApi(token);
        })
    },

    createNewNote(note: Notes, user: any): Promise<void>{
        MeService.getTokenResponseHeader(user).then(async token => {
            NotesApiService.CreateNoteApi(token, note);
        })
        return Promise.resolve()
    },

    deleteNewNoteById(id: string, user: any): Promise<void>{
        MeService.getTokenResponseHeader(user).then(async token => {
            NotesApiService.DeleteNoteApi(token, id);
        })
        return Promise.resolve()
    }

}


export interface Notes {
    id: string;
    title: string;
    description: string;
}