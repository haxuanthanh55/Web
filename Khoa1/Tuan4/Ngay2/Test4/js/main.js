import apiTraCuuBenhNhan from "./api.js";
const inputBenhNhan=document.querySelector('#inputTimKiem');

const hienThi=document.querySelector('#hienThiKetQua');
const selectChuyenKhoa=document.querySelector('#selectChuyenKhoa');
const selectSapXep=document.querySelector('#selectSapXep');
let boDemThoiGian;

function xuLyDuLieu(){
    clearTimeout(boDemThoiGian);

    boDemThoiGian=setTimeout(async()=>{
        const tuKhoa=inputBenhNhan.value.toLowerCase();
        const loaiChuyenKhoa = selectChuyenKhoa.value;
        const kieuSapXep=selectSapXep.value;

        if(tuKhoa===""){
            hienThi.innerHTML="";
            return;
        }
        hienThi.innerHTML="---Đang tải---";
        try{
            const data=await apiTraCuuBenhNhan(tuKhoa);
            const ketQua=data
            .filter(item=>loaiChuyenKhoa==="TatCa"||item.chuyenKhoa===loaiChuyenKhoa)
            .filter(item=>item.ten.toLowerCase().includes(tuKhoa))
            .sort((a,b)=>kieuSapXep==="tangDan"?a.namSinh-b.namSinh : b.namSinh-a.namSinh);
            
            if(ketQua.length===0){
                hienThi.innerHTML="Không tìm thấy hồ sơ bệnh án phù hợp.";
                return;
            }
            hienThi.innerHTML="";
            ketQua.forEach(item=>{
                hienThi.innerHTML+=`<div>Tên: ${item.ten} - Chuyên khoa: ${item.chuyenKhoa} - Năm sinh: ${item.namSinh}</div>`;
            })
        }catch(error){
            // SỬA CHỖ NÀY: Điền lệnh xử lý khi bị lỗi thay vì để ngoặc nhọn trống
            hienThi.innerHTML="Lỗi hệ thống!";
            console.error("Chi tiết lỗi:", error);
        }
    },800);
}

inputBenhNhan.addEventListener('input', xuLyDuLieu);
selectChuyenKhoa.addEventListener('change', xuLyDuLieu); 
selectSapXep.addEventListener('change', xuLyDuLieu);