import { fetchDuLieu } from "./api.js";
import { chuanHoaNghiepVu,duLieuTrang} from "./service.js";
import { renderTable,inTBaoLoi ,renderPhanTrang, hienThiLoading} from "./ui.js";
let state={
    danhSach:[],trangHienTai:1,soLuong:8,tuKhoa:''
}
const khoiTao=async()=>{
    try{
        hienThiLoading(true);
        const duLieuGoc=await fetchDuLieu();
        state.danhSach=duLieuGoc.map(e=>chuanHoaNghiepVu(e));
        hienThiLoading(false);
        renderAll();
    }catch(error){
        hienThiLoading(false);
        inTBaoLoi(error.message);
    }
}
const renderAll=()=>{
    let danhSachLoc=state.danhSach;
    if (state.tuKhoa !== '') {
        const tuKhoaThuong = state.tuKhoa.toLowerCase();
        danhSachLoc = danhSachLoc.filter(e => 
            e.tenSV.toLowerCase().includes(tuKhoaThuong) || 
            e.maSV.toLowerCase().includes(tuKhoaThuong)
        );
    }
    let tongSoTrang=parseInt(danhSachLoc.length/state.soLuong);
    let phanDu=danhSachLoc.length%state.soLuong;
    if(phanDu>0){
        tongSoTrang=tongSoTrang+1;
    }
    const hienThi=duLieuTrang(danhSachLoc,state.trangHienTai,state.soLuong);
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
const nutTim = document.querySelector('#btn-search');
if (nutTim) {
    nutTim.addEventListener('click', () => {
        state.tuKhoa = document.querySelector('#o-tim-kiem').value.trim();
        state.trangHienTai = 1; 
        renderAll();
    });
}
khoiTao();
