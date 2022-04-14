import { User } from "../types/user";

export const isAuthenticate = () => {
    if(!localStorage.getItem('user')) return;
    return JSON.parse(localStorage.getItem('user') as string);
}
export const authenticate = (user: User, next: () => void) => {
    localStorage.setItem('user', JSON.stringify(user));
    next();
}