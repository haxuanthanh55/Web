import { layDuLieu } from "./api.js";
import { hienThiTrangThai,render } from "./ui.js";
const slTrang=5;
let trangHienTai=1;
let tuKhoa='';
let kieuSapXep='tang';
let boDieuKhien;
const traCuu=async()=>{
    if(boDieuKhien){
        boDieuKhien.abort();
    }
    boDieuKhien = new AbortController();
    try{
        hienThiTrangThai("Loading");
        let data=await layDuLieu(boDieuKhien.signal);
        if(tuKhoa){
            data=data.filter(e=>e.khachHang.toLowerCase().includes(tuKhoa.toLowerCase()));
        }
        if(kieuSapXep==='tang'){
            data.sort((a,b)=>a.tongTien-b.tongTien);
        }else{
            data.sort((a,b)=>b.tongTien-a.tongTien);
        }
        const batDau=(trangHienTai-1)*slTrang;
        const ketQua=data.slice(batDau,batDau+slTrang);
        if(ketQua.length===0){
            hienThiTrangThai("Empty");
        }else{
            hienThiTrangThai("");
            render(ketQua);
            document.querySelector("#thong-tin").textContent=`Trang ${trangHienTai}`;
        }
    }catch(loi){
        if(loi.name==='AbortError') return;
        hienThiTrangThai("Error",loi.message);
    }
};
const creDebounce=(ham,thoiGian)=>{
    let timer;
    return(...thamSo)=>{
        clearTimeout(timer);
        timer=setTimeout(()=>ham(...thamSo),thoiGian);
    }
}
document.querySelector("#search").addEventListener("input", creDebounce((e)=>{
    tuKhoa=e.target.value;
    trangHienTai=1;
    traCuu();
},800));
document.querySelector("#sort").addEventListener("change",(e)=>{
    kieuSapXep=e.target.value;
    trangHienTai=1;
    traCuu();
})
document.querySelector("#trang-truoc").addEventListener("click", () => {
    if (trangHienTai > 1) {
        trangHienTai--;
        traCuu();
    }
});

document.querySelector("#trang-sau").addEventListener("click", () => {
    trangHienTai++;
    traCuu();
});
traCuu();