export const generateRandomEmail = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let string = '';
    for(let i=0; i<15; i++){
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    return `${string}@test.com`;
};