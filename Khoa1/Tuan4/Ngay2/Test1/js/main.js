const buttonKiemTra=document.querySelector('#buttonKiemTra');
const hienThi=document.querySelector('#hienThi');
const inputTen=document.querySelector('#tenThanhVien');
buttonKiemTra.addEventListener('click',async()=>{
    hienThi.innerHTML="---Đang tải---";
    try{
        const tuKhoa= inputTen.value;
        const data=await apiTraCuuTask(tuKhoa);
        if(data.length===0){
            hienThi.innerHTML="📭 Thành viên này hiện không có công việc nào.";
            return;
        }
        hienThi.innerHTML="";
        data.forEach(item=>{
            hienThi.innerHTML+=`<div>Tên công việc: ${item.congViec} - Trạng thái: ${item.trangThai}</div>`;
        });
    }catch{
        hienThi.innerHTML="Lỗi hệ thống!";
    }
});