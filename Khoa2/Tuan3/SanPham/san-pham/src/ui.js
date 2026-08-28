export const hienThiTrangThai =(trangThai, thongDiep="")=>{
    const idTrangThai=document.querySelector("#trang-thai");
    const idDuLieu=document.querySelector("#du-lieu");
    idTrangThai.textContent="";
    idTrangThai.className="";
    if(trangThai==="Loading"){
        idTrangThai.textContent="Đang tải dữ liệu...";
        idTrangThai.className="trang-thai-loading";
        idDuLieu.textContent="";
    }else if(trangThai==="Error"){
        idTrangThai.textContent=`Lỗi: ${thongDiep}`;
        idTrangThai.className="trang-thai-error";
        idDuLieu.textContent="";
    }else if(trangThai==="Empty"){
        idTrangThai.textContent="Không tìm thấy hồ sơ nào";
        idTrangThai.className="trang-thai-empty";
        idDuLieu.textContent="";
    }
};
export const render=(danhSach)=>{
    const idDuLieu=document.querySelector("#du-lieu");
    idDuLieu.textContent="";
    danhSach.forEach(item=>{
        const div=document.createElement("div");
        div.className="the-bn";
        const ten=document.createElement("h3");
        ten.textContent = item.khachHang;
        const tien=document.createElement("p");
        tien.textContent=`Viện phí: ${item.tongTien} VNĐ`;
        div.appendChild(ten);
        div.appendChild(tien);
        idDuLieu.appendChild(div);
    })
}
