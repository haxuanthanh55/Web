const duLieuBenhNhan = [
    { ten: "Nguyễn Văn An", chuyenKhoa: "Nội khoa", namSinh: 1985 },
    { ten: "Trần Thị Bình", chuyenKhoa: "Ngoại khoa", namSinh: 1990 },
    { ten: "Lê Hoàng Cường", chuyenKhoa: "Răng Hàm Mặt", namSinh: 2000 },
    { ten: "Phạm Thị Dung", chuyenKhoa: "Nội khoa", namSinh: 1975 },
    { ten: "Vũ Văn Em", chuyenKhoa: "Ngoại khoa", namSinh: 1995 }
];

function apiTraCuuBenhNhan(tuKhoa){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(tuKhoa==="MatHang"){
                reject(new Error("Lỗi kết nối đến máy chủ phòng khám!"));
            }
            else{
                resolve(duLieuBenhNhan);
            }
        },1000);
    });
}
export default apiTraCuuBenhNhan;