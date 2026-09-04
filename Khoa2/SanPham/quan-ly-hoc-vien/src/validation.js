export const kiemTraHopLe = (sv) => {
    if (!sv.maSV || !sv.tenSV) {
        alert('Mã SV và Họ tên không được để trống!');
        return false;
    }
    if (sv.gpa < 0 || sv.gpa > 4 || sv.cpa < 0 || sv.cpa > 4) {
        alert('Điểm GPA và CPA phải nằm trong khoảng từ 0 đến 4!');
        return false;
    }
    if (sv.phanTramNo < 0 || sv.renLuyen < 0 || sv.renLuyen > 100) {
        alert('Phần trăm nợ không được âm và Điểm rèn luyện từ 0-100!');
        return false;
    }
    return true;
};