export const layDuLieu=async (huy)=>{
    const response =await fetch('/data.json',{signal:huy});
    if(!response.ok){
        throw new Error("Lỗi đường truyền!");
    }
    return await response.json();
};