export const layDuLieu=async (huy)=>{
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response =await fetch('/data.json',{signal:huy});
    if(!response.ok){
        throw new Error("Lỗi đường truyền!");
    }
    return await response.json();
};