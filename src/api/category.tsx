import instance from './config';

export const list = () => {
    const url = `/category`;
    return instance.get(url);
};

export const add = (data: any) => {
    const url = `/category`;
    return instance.post(url);
}

export const remove = (id: number | string) => {
    const url = `/category/${id}`;
    return instance.delete(url);
}

export const update = (id: string, data: any) => {
    const url = `/category/${id}`;
    return instance.put(url, data)
}