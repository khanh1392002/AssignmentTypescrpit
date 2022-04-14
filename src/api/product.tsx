import { ProductType } from '../types/product';
import { isAuthenticate } from '../utils/localStorage';
import instance from './config';


const user = isAuthenticate();
console.log(user);

export const list = () => {
    const url = `/products`;
    return instance.get(url);
};
export const read = (id: string) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const add = (data: any) => {
    const url = '/products';
 
    return instance.post(url, data);
};
export const remove = (id: number | string) => {
    const url = `/products/${id}`;
    
    return instance.delete(url);
};
export const update = (id: string, data: any) => {
    const url = `/products/${id}`;
    
    return instance.put(url, data)
};