// --- PHẦN LOGIC TÍNH TOÁN (SỬ DỤNG RETURN) ---

function xepLoaiDiem(toan, van, anh) {
    var diem = (toan + van + anh) / 3;
    diem = diem.toFixed(1);
    var ketQua = "Điểm trung bình: " + diem + " Xếp loại: ";
    
    if (diem >= 8) {
        return ketQua + "Giỏi";
    } else if (diem >= 7) {
        return ketQua + "Khá";
    } else if (diem >= 5) {
        return ketQua + "Trung bình";
    } else {
        return ketQua + "Kém";
    }
}

function tinhTuoi(namSinh) {
    var hienTai = new Date().getFullYear();
    return hienTai - namSinh;
}

function tinhTienPhong(type, count) {
    var price;
    if (type == "normal") {
        price = 100000 * count;
    } else if (type == "deluxe") {
        price = 200000 * count;
    } else {
        price = 500000 * count;
    }
    return price;
}

function taoDaySo(n) {
    var dayso = "";
    for (var i = 1; i <= n; i++) {
        dayso += i + " ";
    }
    return dayso;
}

function tinhTong(n) {
    var i = 1;
    var tong = 0;
    while (i <= n) {
        tong = tong + i;
        i++;
    }
    return tong;
}

function kiemTraNamNhuan(nam) {
    if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0) {
        return true;
    }
    return false;
}

function timSoLonNhat(a, b, c) {
    var max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}
function kiemTraNamNhuan(nam) {
    if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0) {
        return true;
    }
    return false;
}

function timSoLonNhat(a, b, c) {
    var max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}


// --- PHẦN TƯƠNG TÁC GIAO DIỆN (GỌI HÀM VÀ IN KẾT QUẢ) ---

function diemtb() {
    var toan = Number(document.getElementById('toan').value);
    var van = Number(document.getElementById('van').value);
    var anh = Number(document.getElementById('anh').value);
    
    var ketQua = xepLoaiDiem(toan, van, anh);
    document.getElementById('diemtb').innerText = ketQua;
}

function nam() {
    var namsinh = Number(document.getElementById('namsinh').value);
    
    var tuoi = tinhTuoi(namsinh);
    document.getElementById('xacnhan').innerText = "Năm nay bạn: " + tuoi + " tuổi.";
}

function thongtin() {
    var ten = document.getElementById('ten').value;
    var type = document.getElementById('type').value;
    var count = Number(document.getElementById('count').value);
    
    var price = tinhTienPhong(type, count);
    document.getElementById('xacnhan2').innerText = "Khách hàng " + ten + " đã đặt phòng " + type + " trong " + count + " đêm. Tổng thanh toán: " + price + " VNĐ.";
}

function nhapn() {
    var n = Number(document.getElementById('n').value);
    
    var chuoiSo = taoDaySo(n);
    document.getElementById('ketquaN').innerText = chuoiSo;
}

function tongn() {
    var n = Number(document.getElementById('nn').value);
    
    var tong = tinhTong(n);
    document.getElementById('tinhtongn').innerText = "Tổng từ 1 đến " + n + " là: " + tong;
}
function kiemTraNhuan() {
    var nam = Number(document.getElementById('namnhuan').value);
    var isNhuan = kiemTraNamNhuan(nam);
    
    if (isNhuan == true) {
        document.getElementById('ketquaNhuan').innerText = nam + " là năm nhuận.";
    } else {
        document.getElementById('ketquaNhuan').innerText = nam + " KHÔNG phải năm nhuận.";
    }
}

function timSoMax() {
    var a = Number(document.getElementById('so1').value);
    var b = Number(document.getElementById('so2').value);
    var c = Number(document.getElementById('so3').value);
    
    var max = timSoLonNhat(a, b, c);
    document.getElementById('ketquaMax').innerText = "Số lớn nhất là: " + max;
}