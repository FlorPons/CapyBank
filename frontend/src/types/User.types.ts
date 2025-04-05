export interface User {
    id_user: number;
    name: string;
    last_name: string;
    email: string;
    birth_date: Date;
    phone: string;
    country_id: number;
    city_id: number;
    dni: number;
    dni_photo?: File | null;
    password: string;
    repeatPwd?: string;  
    cvu: number;
    account_id: number;
}

export interface LoginResponse {
    message: string;
    user: {
        id_user: number;
        name: string;
        last_name: string;
        email: string;
        phone: string;
        account_id: number;
        cvu: number;
    };
}

export type RegisterUser = Omit<User, 'id_user'>

export type LoginCredentials = Pick<User, 'email' | 'password'>
export type UserLogged = Pick<User, 'id_user' | 'name'>