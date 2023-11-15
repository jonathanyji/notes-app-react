import { TokenResponseHeader } from "../Me-Service";
import { Notes } from "../Notes-Service";

export const NotesApiService = {

    async _handleHttpCall(method: string, token: TokenResponseHeader, url: string, body?: any): Promise<Response> {
        return await fetch(`https://localhost:7096/${url}`, {
                method: method,
                headers: {
                    'Authorization': `Bearer ${token.access_token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
            });
    },

    _handleRequestError(result: any){
        if (!result.ok) {
            throw new Error(`HTTP error! Status: '${result.status}'`)
        }
    },

    async listNotesApi(token: TokenResponseHeader): Promise<Notes[]>  {
        try {
            const res = await this._handleHttpCall('GET', token, 'list')
            this._handleRequestError(res);
            const data = await res.json();
            return Promise.resolve(data.value);
        }
        catch (err) {
            return Promise.reject(err)
        }
    },

    async CreateNoteApi(token: TokenResponseHeader, request: Notes): Promise<void>  {
        console.log("Calling NOTES API")
        try {
            const res = await this._handleHttpCall('POST', token, 'create', request)
            this._handleRequestError(res);
            return Promise.resolve();
        }
        catch (err) {
            return Promise.reject(err)
        }
    },

    async DeleteNoteApi(token: TokenResponseHeader, id: string): Promise<void>  {
        console.log("Calling DELETE NOTES API")
        try {
            const res = await this._handleHttpCall('DELETE', token, 'delete' + '?id=' + id)
            this._handleRequestError(res);
            return Promise.resolve();
        }
        catch (err) {
            return Promise.reject(err)
        }
    }
}