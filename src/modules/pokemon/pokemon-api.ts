import axios, { AxiosResponse } from 'axios';

export class PokemonApi {

    private endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    async getPokemonData(offset: number, limit: number): Promise<AxiosResponse> {
        try {
            const response = await axios.get(`${this.endpoint}?offset=${offset}&limit=${limit}`);
            return response.data['results'];
        } catch (error) {
            console.error('Erro ao fazer a chamada GET:', error);
            throw error;
        }
    }
}