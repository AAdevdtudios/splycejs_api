
import * as dotenv from 'dotenv';
import axios, { AxiosRequestConfig } from 'axios';
import {CreateAccountType, ResponseAccount, ApiError, UpdateAccountType, Bank,DeleteMessage} from "./types"
dotenv.config(); // Load environment variables

function pass_error(error:any){
    if (axios.isAxiosError(error)) {
        // Here, error.response.data needs to be cast to the ApiError type
        // This is assuming the API error response has the same structure as the ApiError interface
        const apiError: ApiError = error.response?.data as ApiError;
        throw apiError
    } else {
    // Handle non-Axios errors
    console.error('An unexpected error occurred:', error);
    }
    throw error; // Re-throw the error if you want the caller to handle it as well.
}

export class splyce_api {
    private apiKey: string | undefined;
    private apiEndpoint: string;

    constructor() {
        this.apiKey = process.env.Splyce_Key;
        this.apiEndpoint = 'http://127.0.0.1:8000/api';
        if (!this.apiKey) {
            throw new Error('Splyce_Key environment variable is not defined.');
        }

    }
    async get_banks():Promise<Bank>{
        const config: AxiosRequestConfig = {
            headers: {
                'X-API-Key': `${this.apiKey}`
            }
        };
        try {
            const { data } = await axios.get(this.apiEndpoint+"/banks/", config)
            return data
        } catch (error) {
            throw pass_error(error)
        }
    }

    async read_account(index: string) : Promise<ResponseAccount>{
        const config: AxiosRequestConfig = {
            headers: {
                'X-API-Key': `${this.apiKey}`
            }
        };

        try {
            const {data} = await axios.get(this.apiEndpoint+`/account/${index}`, config)
            return data
        } catch (error) {
            throw pass_error(error)
        }
    }
    async create_account(payload: CreateAccountType): Promise<ResponseAccount>{

        const config: AxiosRequestConfig = {
            headers: {
                'X-API-Key': `${this.apiKey}`
            }
        };
        try{
            const { data } = await axios.post(this.apiEndpoint+"/account/", payload, config)
            return data
        }catch(error){
            throw pass_error(error)
        }
    }
    async update_account(index:string,payload:UpdateAccountType): Promise<ResponseAccount> {
        const config: AxiosRequestConfig = {
            headers: {
                'X-API-Key': `${this.apiKey}`
            }
        };
        try{
            const { data } = await axios.put(this.apiEndpoint+`/account/${index}`, payload, config)
            return data
        }catch(error){
            throw pass_error(error)
        }
    }
    async delete_account(index:string):Promise<DeleteMessage> {
        const config: AxiosRequestConfig = {
            headers: {
                'X-API-Key': `${this.apiKey}`
            }
        };
        try{
            const { data } = await axios.delete(this.apiEndpoint+`/account/${index}`, config)
            return data
        }catch(error){
            throw pass_error(error)
        }
    }
}

