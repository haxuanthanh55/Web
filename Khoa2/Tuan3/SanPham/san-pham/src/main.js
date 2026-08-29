import { layDuLieu } from "./api.js";
import { hienThiTrangThai,render } from "./ui.js";
//tạo trạng thái
const slTrang=5; //max bn 1 trang
let trangHienTai=1;
let tuKhoa='';
let kieuSapXep='mac-dinh';
let boDieuKhien;//qly abortController
let trangThaiLoc='all';//status đóng tiền

const traCuu=async()=>{
    //huỷ request
    if(boDieuKhien){
        boDieuKhien.abort();
    }
    boDieuKhien = new AbortController();
    try{
        hienThiTrangThai("Loading");//tbao loading
        //gọi api dữ liệu, gắn signal để ngắt 
        let data=await layDuLieu(boDieuKhien.signal);
        //tìm kiếm
        if(tuKhoa){
            data=data.filter(e=>e.khachHang.toLowerCase().includes(tuKhoa.toLowerCase())||
        e.maBN.toLowerCase().includes(tuKhoa.toLowerCase()));
        }
        //lọc
        if(trangThaiLoc !== 'all') {
            data = data.filter(e => e.trangThai === trangThaiLoc);
        }
        //sắp xếp
        if(kieuSapXep==='tang'){
            data.sort((a,b)=>a.tongTien-b.tongTien);
        }else if (kieuSapXep === 'giam') {
            data.sort((a, b) => b.tongTien - a.tongTien);
        }
        //phân trang
        const batDau=(trangHienTai-1)*slTrang;
        const ketQua=data.slice(batDau,batDau+slTrang);
        if(ketQua.length===0){
            hienThiTrangThai("Empty");//kco dlieu
        }else{
            hienThiTrangThai("");//xoá tbao
            render(ketQua);
            document.querySelector("#thong-tin").textContent=`Trang ${trangHienTai}`;
        }
    }catch(loi){
        //bỏ qua lỗi của abort...
        if(loi.name==='AbortError') return;
        hienThiTrangThai("Error",loi.message);//in lỗi 
    }
};
//debounce
const creDebounce=(ham,thoiGian)=>{
    let timer;
    return(...thamSo)=>{
        clearTimeout(timer);
        timer=setTimeout(()=>ham(...thamSo),thoiGian);
    }
}
//tìm kiếm
document.querySelector("#search").addEventListener("input", creDebounce((e)=>{
    tuKhoa=e.target.value;
    trangHienTai=1;
    traCuu();
},800));
//sắp xếp
document.querySelector("#sort").addEventListener("change",(e)=>{
    kieuSapXep=e.target.value;
    trangHienTai=1;
    traCuu();
})
// lùi trang
document.querySelector("#trang-truoc").addEventListener("click", () => {
    if (trangHienTai > 1) {
        trangHienTai--;
        traCuu();
    }
});
//trang tiếp
document.querySelector("#trang-sau").addEventListener("click", () => {
    trangHienTai++;
    traCuu();
});
//lọc
document.querySelector("#filter-status").addEventListener("change", (e) => {
    trangThaiLoc = e.target.value;
    trangHienTai = 1;
    traCuu();
});
traCuu();
//xoá bộ lọc
document.querySelector("#xoa-loc").addEventListener("click", () => {
    tuKhoa = '';
    kieuSapXep = 'mac-dinh';
    trangThaiLoc = 'all';
    trangHienTai = 1;
    document.querySelector("#search").value = "";
    document.querySelector("#sort").value = "mac-dinh";
    document.querySelector("#filter-status").value = "all";
    traCuu();
});