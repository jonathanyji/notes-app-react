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
                id: 4,
                title: 'This is title 6',
                description: 'this is description 5'
            },
            {
                id: 4,
                title: 'This is title 7',
                description: 'this is description 6'
            },
            {
                id: 4,
                title: 'This is title 8',
                description: 'this is description 7'
            },
            {
                id: 4,
                title: 'This is title 9',
                description: 'this is description 8'
            },
            {
                id: 4,
                title: 'This is title 10',
                description: 'this is description 9'
            },
            {
                id: 4,
                title: 'This is title 11',
                description: 'this is description 10'
            }
        ]
    },

    getNotes(): Promise<Notes[]> {
        return Promise.resolve(this.getNotesData());
      },
}

export interface Notes {
    id: number;
    title: string;
    description: string;
}