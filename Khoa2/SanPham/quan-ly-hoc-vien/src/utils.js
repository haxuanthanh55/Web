export const luuVaoBoNho = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};
export const docTuBoNho = (key) => {
    const data = localStorage.getItem(key);
    try {
        return data ? JSON.parse(data) : null;
    } catch (error) {
        return null; 
    }
};