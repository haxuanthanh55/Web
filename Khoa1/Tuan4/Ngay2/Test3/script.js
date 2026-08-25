const hienThi = document.querySelector('#hienThi');
const inputTen = document.querySelector('#tenThanhVien');

// 1. Khai báo biến toàn cục để lưu bộ đếm thời gian
let boDemThoiGian; 

// 2. Đổi sự kiện từ 'click' sang 'input' (kích hoạt mỗi khi gõ phím)
inputTen.addEventListener('input', () => {
    
    // BƯỚC QUAN TRỌNG: Xóa ngay bộ đếm cũ nếu người dùng vẫn đang gõ
    clearTimeout(boDemThoiGian);
    
    // BƯỚC QUAN TRỌNG: Cài đặt lại bộ đếm mới (Đợi 500ms)
    boDemThoiGian = setTimeout(async () => {
        
        // --- Toàn bộ logic API cũ được đưa vào bên trong setTimeout ---
        const tuKhoa = inputTen.value;
        
        // Khóa an toàn: Nếu xóa trắng ô input thì không gọi API
        if (tuKhoa === "") {
            hienThi.innerHTML = "";
            return;
        }

        hienThi.innerHTML = "---Đang tải---";
        
        try {
            const data = await apiTraCuuTask(tuKhoa);
            
            if (data.length === 0) {
                hienThi.innerHTML = "📭 Thành viên này hiện không có công việc nào.";
                return;
            }
            
            hienThi.innerHTML = "";
            data.forEach(item => {
                hienThi.innerHTML += `<div>Tên công việc: ${item.congViec} - Trạng thái: ${item.trangThai}</div>`;
            });
            
        } catch {
            hienThi.innerHTML = "Lỗi hệ thống!";
        }
        // -----------------------------------------------------------
        
    }, 500); // Đợi 0.5 giây sau khi ngừng gõ mới thực thi đoạn code bên trong
});