# Dự án: Hệ thống quản lý học viên
Dự án ứng dụng web quản lý thông tin học viên, sử dụng Vanilla JavaScript, LocalStorage và tích hợp kiểm thử đơn vị.
## Chức năng chính
- Quản lý dữ liệu: Thêm, xem, sửa, xóa thông tin học viên.
- Lưu trữ: Đồng bộ dữ liệu qua LocalStorage của trình duyệt.
- Xử lý dữ liệu: 
  - Lọc danh sách (học bổng, nợ môn, chưa đóng học phí).
  - Sắp xếp sinh viên theo GPA giảm dần.
  - Phân trang hiển thị.
- Logic nghiệp vụ: Tự động xếp loại học lực, tính toán cảnh báo nợ môn và xét duyệt học bổng.
- Giao diện Responsive: Tương thích trên các thiết bị. Tự động ẩn các cột phụ trên màn hình di động để tối ưu hiển thị.
## Công nghệ sử dụng
- Frontend: HTML, CSS, JavaScript (ES6 Modules).
- Build Tool: Vite.
- Unit Test: Vitest (áp dụng phân tích giá trị biên cho các hàm nghiệp vụ).
## Cấu trúc thư mục lõi
- `src/main.js`: Xử lý tương tác giao diện và sự kiện.
- `src/service.js`: Các hàm xử lý nghiệp vụ chính.
- `src/business.test.js`: Các kịch bản kiểm thử đơn vị.
- `src/ui.js`: Chịu trách nhiệm render DOM.
- `src/validation.js`: Kiểm tra hợp lệ dữ liệu đầu vào.
- `src/utils.js`: Chứa các hàm tiện ích như đọc/ghi LocalStorage.
## Cài đặt và chạy dự án
1. Cài đặt thư viện: `npm install`
2. Chạy môi trường phát triển: `npm run dev`
3. Chạy kiểm thử đơn vị: `npm run test`