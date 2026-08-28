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
        const div = document.createElement("div");
        div.className = "the-bn";
        const ma = document.createElement("div");
        ma.className = "cot-ma";
        ma.textContent = item.maBN;
        const ten = document.createElement("div");
        ten.className = "cot-ten";
        ten.textContent = item.khachHang;
        const tien=document.createElement("div");
        tien.className="cot-vien-phi"
        tien.textContent=`${item.tongTien} VNĐ`;
        const trangThai = document.createElement("div");
        trangThai.className = `cot-trang-thai ${item.trangThai === 'Đã nộp' ? 'da-nop' : 'chua-nop'}`;
        trangThai.textContent = item.trangThai;
        div.appendChild(ma);
        div.appendChild(ten);
        div.appendChild(tien);
        div.appendChild(trangThai);
        idDuLieu.appendChild(div);
    })
}
