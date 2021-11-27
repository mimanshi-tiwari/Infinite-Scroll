export const setLocalStorageValue = (key: string, value: any) => {
    let storageValue = JSON.stringify(value);
    localStorage.setItem(key, storageValue);
}

export const getLocalStorageValue = (key: string) => {
    return localStorage.sgetItem(key);
}

export const clearLocalStorageValue = () => {
    return localStorage.clear();
}

export const isEmpty: any = (value: any) => {
    return (typeof value === "undefined" || value === null);
}