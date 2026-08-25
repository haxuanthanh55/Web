function capNhatDuLieu() {
    // 1. BOOLEAN: Thuộc tính .checked của checkbox luôn trả về true hoặc false
    let isPremium = document.getElementById('premiumInput').checked;
    
    // 2. UNDEFINED: Xử lý logic điểm thi
    let diemNhapVao = document.getElementById('diemInput').value;
    let diemTotNghiep; // Khai báo nhưng chưa gán -> undefined
    
    if (diemNhapVao !== "") {
        diemTotNghiep = Number(diemNhapVao); // Nếu có nhập thì gán số vào
    }

    // 3. NULL: Xử lý logic mã giảm giá
    let maNhapVao = document.getElementById('maGiamGiaInput').value;
    // Dùng toán tử 3 ngôi: Nếu nhập chữ thì lấy chữ, nếu rỗng thì gán Null
    let maGiamGia = (maNhapVao !== "") ? maNhapVao : null; 

    // --- KIỂM TRA ĐIỀU KIỆN VÀ HIỂN THỊ ---
    let textTrangThai = isPremium ? "Đã mở khóa toàn bộ" : "Tài khoản học thử";
    
    let textDiemThi;
    if (diemTotNghiep === undefined) {
        textDiemThi = "Chưa có điểm (Đang chờ thi)";
    } else {
        textDiemThi = diemTotNghiep + " điểm";
    }

    let textGiamGia;
    if (maGiamGia === null) {
        textGiamGia = "Không áp dụng mã";
    } else {
        textGiamGia = maGiamGia;
    }

    // In ra màn hình
    document.getElementById('hienThiHoSo').innerHTML = `
        <hr>
        <p><b>Quyền truy cập:</b> ${textTrangThai}</p>
        <p><b>Điểm tốt nghiệp:</b> ${textDiemThi}</p>
        <p><b>Mã giảm giá:</b> ${textGiamGia}</p>
    `;
}