export const hienThiTrangThai =(trangThai, thongDiep="")=>{
    const idTrangThai=document.querySelector("#trang-thai");
    const idDuLieu=document.querySelector("#du-lieu");
    //xoá trạng thái cũ trc khi update
    idTrangThai.textContent="";
    idTrangThai.className="";
    //logic hiển thị
    if(trangThai==="Loading"){
        idTrangThai.textContent="Đang tải dữ liệu...";
        idTrangThai.className="trang-thai-loading";
        idDuLieu.textContent=""; // ẩn dlieu cũ trong lúc tải mới
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
    //dọn phần hiển thị dữ liệu cũ
    idDuLieu.textContent="";
    //vòng tạo html cho từng bnhan
    danhSach.forEach(item=>{
        const div = document.createElement("div");
        div.className = "the-bn";
        const ma = document.createElement("div"); //mã bnhan
        ma.className = "cot-ma";
        ma.textContent = item.maBN;
        const ten = document.createElement("div");//tên bn
        ten.className = "cot-ten";
        ten.textContent = item.khachHang;
        const tien=document.createElement("div");//viện phí
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
