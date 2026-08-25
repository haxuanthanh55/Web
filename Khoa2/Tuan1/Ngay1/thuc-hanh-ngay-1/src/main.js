import {hoSoBacSi} from '/.data.js';
const tiepNhanBacSi= (danhSach, bacSiMoi)=>{
    return [...danhSach,bacSiMoi];
}
const chuanHoaHoSo=(bacSi)=>{
    if(!bacSi) return null;
    const {maBS,ten,chuyenKhoa="Đa khoa",...chiTietCongViec}=bacSi;
    return {maBS,ten,chuyenKhoa,...chiTietCongViec};
}
const dongBoDuLieu=(danhSach)=>{
    if(!danhSach || danhSach.length===0) return [];
    return danhSach.map(chuanHoaHoSo).filter(item=>item!==null);
}