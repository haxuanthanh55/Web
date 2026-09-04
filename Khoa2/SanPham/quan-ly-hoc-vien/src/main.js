import { fetchDuLieu } from "./api.js";
import { chuanHoaNghiepVu,duLieuTrang} from "./service.js";
import { renderTable,inTBaoLoi ,renderPhanTrang} from "./ui.js";
let state={
    danhSach:[],trangHienTai:1,soLuong:8
}
const khoiTao=async()=>{
    try{
        const duLieuGoc=await fetchDuLieu();
        state.danhSach=duLieuGoc.map(e=>chuanHoaNghiepVu(e));
        renderAll();
    }catch(error){
        inTBaoLoi(error.message);
    }
}
const renderAll=()=>{
    let tongSoTrang=parseInt(state.danhSach.length/state.soLuong);
    let phanDu=state.danhSach.length%state.soLuong;
    if(phanDu>0){
        tongSoTrang=tongSoTrang+1;
    }
    const hienThi=duLieuTrang(state.danhSach,state.trangHienTai,state.soLuong);
    renderTable(hienThi);
    renderPhanTrang(tongSoTrang,state.trangHienTai);
    const nutTrang=document.querySelectorAll('.btn-trang');
    nutTrang.forEach(e=>{
        e.addEventListener('click',()=>{
            state.trangHienTai=parseInt(e.dataset.trang);
            renderAll();
        });
    });
};
khoiTao();
