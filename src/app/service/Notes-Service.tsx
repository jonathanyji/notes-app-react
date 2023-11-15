import { MeService, TokenResponseHeader } from "./Me-Service";

export const NotesService = {
    getNotesData(): Notes[] {
        return [
            {
                id: 1,
                title: 'This is title',
                description: 'this is description'
            },
            {
                id: 2,
                title: 'This is title 2',
                description: 'this is description 2'
            },
            {
                id: 3,
                title: 'This is title 3',
                description: 'this is description 3'
            },
            {
                id: 4,
                title: 'This is title 5',
                description: 'this is description 4'
            },
            {
                id: 5,
                title: 'This is title 6',
                description: 'this is description 5'
            },
            {
                id: 6,
                title: 'This is title 7',
                description: 'this is description 6'
            },
            {
                id: 7,
                title: 'This is title 8',
                description: 'this is description 7'
            },
            {
                id: 8,
                title: 'This is title 9',
                description: 'this is description 8'
            },
            {
                id: 9,
                title: 'This is title 10',
                description: 'this is description 9'
            },
            {
                id: 10,
                title: 'This is title 11',
                description: 'this is description 10'
            }
        ]
    },

    getNotes(): Promise<Notes[]> {
        return Promise.resolve(this.getNotesData());
    },

    async getAllNotes(user: any) {
        return MeService.getTokenResponseHeader(user).then(async token => {
            return this.listNotesApi(token);
        })
    },


    async listNotesApi(token: TokenResponseHeader): Promise<Notes[]>  {
        try {
            const res = await fetch('https://localhost:7096/list', {
                headers: {
                    'Authorization': `Bearer ${token.access_token}`,
                    'Content-Type': 'application/json' // Adjust content type if necessary
                }
            });
            if (!res.ok) {
                throw new Error(`HTTP error! Status: '${res.status}'`)
            }
            const data = await res.json();
            return Promise.resolve(data.value);
        }
        catch (err) {
            return Promise.reject(err)
        }
    }

}


export interface Notes {
    id: number;
    title: string;
    description: string;
}