const KEY='DANH_SACH_BENH_NHAN';
export const layDuLieu=()=>{
    const chuoiData=localStorage.getItem(KEY);
    return JSON.parse(chuoiData)||[];
};
export const luuDuLieu=(mangCanLuu)=>{
    localStorage.setItem(KEY,JSON.stringify(mangCanLuu));
};