import { TokenResponseHeader } from "../Me-Service";
import { Notes } from "../Notes-Service";

export const NotesApiService = {

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