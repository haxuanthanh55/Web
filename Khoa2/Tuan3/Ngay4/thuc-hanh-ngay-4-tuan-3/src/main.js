const taoDebounce=(ham,thoiGian)=>{
    let timer;
    return(...thamSo)=>{
        clearTimeout(timer);
        timer=setTimeout(()=>ham(...thamSo),thoiGian);
    }
}
const traCuuHoaDon=async (tuKhoa, kieuSapXep,trangHienTai,soHoaDonMoiTrang)=>{
    try{
        const response=await fetch('/data.json');
        if(!response.ok){
            throw new Error("Lỗi tải dữ liệu!");
        }
        let data=await response.json();
        if(tuKhoa){
            data=data.filter(e=>e.khachHang.toLowerCase().includes(tuKhoa.toLowerCase()));
        }
        if(kieuSapXep==='tang'){
            data.sort((a,b)=>a.tongTien-b.tongTien);
        }
        else if(kieuSapXep==='giam'){
            data.sort((a,b)=>b.tongTien-a.tongTien);
        }
        const viTriBatDau=(trangHienTai-1)*soSPMoiTrang;
        const viTriKetThuc=viTriBatDau+soSPMoiTrang;
        const duLieuDaPhanTrang=data.slice(viTriBatDau,viTriKetThuc);
        console.log(`Kết quả Trang ${trangHienTai}:`,duLieuDaPhanTrang);
    }catch(loi){
        console.log("Lỗi: ",loi.message);
    }
}
const oTimKiem=taoDebounce(traCuuHoaDon,800);
oTimKiem("Nguyen","giam",1,2);