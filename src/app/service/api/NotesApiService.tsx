import { TokenResponseHeader } from "../Me-Service";
import { Notes } from "../Notes-Service";

export const NotesApiService = {

    async _handleHttpCall(url: string, token: TokenResponseHeader): Promise<Response> {
        return await fetch(`https://localhost:7096/${url}`, {
                headers: {
                    'Authorization': `Bearer ${token.access_token}`,
                    'Content-Type': 'application/json'
                }
            });
    },

    async listNotesApi(token: TokenResponseHeader): Promise<Notes[]>  {
        try {
            const res = await this._handleHttpCall('list', token)
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