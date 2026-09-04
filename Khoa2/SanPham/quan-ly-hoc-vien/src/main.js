import { fetchDuLieu } from "./api.js";
import { chuanHoaNghiepVu } from "./service.js";
import { renderTable,inTBaoLoi } from "./ui.js";
let state={
    danhSach:[]
}
const khoiTao=async()=>{
    try{
        const duLieuGoc=await fetchDuLieu();
        state.danhSach=duLieuGoc.map(e=>chuanHoaNghiepVu(e));
        renderTable(state.danhSach);
    }catch(error){
        inTBaoLoi(error.message);
    }
}
khoiTao();