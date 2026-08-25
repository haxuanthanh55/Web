**Code gốc:**

**const gioHang = \[**

&#x20;   **{ id: 1, ten: "Áo thun", gia: 150000, loai: "QuanAo" },**

&#x20;   **{ id: 2, ten: "Giày Sneaker", gia: 500000, loai: "GiayDep" },**

&#x20;   **{ id: 3, ten: "Quần Jean", gia: 350000, loai: "QuanAo" }**

**];**



**1.Filter(Màng lọc)**



**const danhSachQuanAo = gioHang.filter(sanPham => sanPham.loai === "QuanAo");**



**console.log(danhSachQuanAo);**



**Trả về:**

/\* Kết quả trả về một mảng MỚI, độ dài nhỏ hơn mảng gốc (2 phần tử):

\[

&#x20;   { id: 1, ten: "Áo thun", gia: 150000, loai: "QuanAo" },

&#x20;   { id: 3, ten: "Quần Jean", gia: 350000, loai: "QuanAo" }

]

\*/

**2.Map(Ánh xạ/Biến đổi)**



**const danhSachTen = gioHang.map(sanPham => sanPham.ten);**



\*\*console.log(danhSachTen);

Trả về:\*\*

/\* Kết quả trả về một mảng MỚI, độ dài bằng hệt mảng gốc nhưng cấu trúc đã biến đổi:

\[ "Áo thun", "Giày Sneaker", "Quần Jean" ]

\*/



**const danhSachGiamGia = gioHang.map(sanPham => {**



&#x09;**return { ...sanPham, giaMoi: sanPham.gia \* 0.9 };**



**});**



**console.log(danhSachGiamGia);**



Trả về:\*\*

/\* Kết quả trả về mảng MỚI, giữ nguyên cấu trúc cũ nhưng có thêm dữ liệu:

\[

&#x20;   { id: 1, ten: "Áo thun", gia: 150000, loai: "QuanAo", giaMoi: 135000 },

&#x20;   { id: 2, ten: "Giày Sneaker", gia: 500000, loai: "GiayDep", giaMoi: 450000 },

&#x20;   { id: 3, ten: "Quần Jean", gia: 350000, loai: "QuanAo", giaMoi: 315000 }

]

\*/

**3.Tìm kiếm(find \& findIndex)**



**const sanPhamChiTiet = gioHang.find(sp => sp.id === 2);**



**console.log("Sản phẩm ID 2:", sanPhamChiTiet);**

// Kết quả: { id: 2, ten: "Giày Sneaker", ... } (Chỉ trả về 1 Object)
(Nghiệp vụ: Khách hàng click vào xem chi tiết sản phẩm có mã id = 2. Hệ thống cần bốc chính xác sản phẩm đó ra.)



**const viTriQuanJean = gioHang.findIndex(sp => sp.ten === "Quần Jean");**



**console.log("Vị trí Quần Jean:", viTriQuanJean);**



// Kết quả: 2 (Vì nó nằm ở vị trí thứ 3 trong mảng, đếm từ 0)
(Nghiệp vụ: Khách hàng muốn xóa "Quần Jean". Hệ thống cần tìm vị trí (index) của nó trong mảng để tiến hành cắt bỏ.)



\*\***4.Kiểm tra điều kiện (some \& every)**



**const duocFreeship = gioHang.some(sp => sp.gia >= 500000);**



**console.log("Được Freeship không?:", duocFreeship);**



// Kết quả: true (Vì có Giày Sneaker giá 500k)

(Nghiệp vụ: Chương trình khuyến mãi: "Tặng voucher Freeship nếu giỏ hàng có ít nhất 1 sản phẩm từ 500k trở lên".)

**const apDungMaGiamGia = gioHang.every(sp => sp.loai === "QuanAo");**



**console.log("Được dùng mã FASHION không?:", apDungMaGiamGia);**

// Kết quả: false (Bị vướng đôi Giày không phải "QuanAo")
(Nghiệp vụ: Mã giảm giá "FASHION" chỉ áp dụng nếu 100% sản phẩm trong giỏ đều là quần áo.)



**5.Tính toán gom tụ(reduce)**



**const tongTienThanhToan = gioHang.reduce((tong, sp) => tong + sp.gia, 0);**



**console.log("Tổng tiền:", tongTienThanhToan);**



// Biến 'tong' sẽ tích lũy dần tiền qua từng vòng lặp. Giá trị khởi tạo là 0.
// Kết quả: 1000000 (150k + 500k + 350k)
(Nghiệp vụ: Tính tổng số tiền khách hàng cần thanh toán trước khi đặt hàng.)

**6.Sắp xếp(sort \& sao chép)**

// BẮT BUỘC: Dùng spread (...) tạo mảng ảo trước khi sort



**const gioHangGiamDan = \[...gioHang];**

(// a và b đại diện cho 2 sản phẩm mang ra so sánh. Lấy giá b - giá a để xếp giảm dần.)

**gioHangGiamDan.sort((a, b) => b.gia - a.gia);**



**console.log("Sau khi sắp xếp:", gioHangGiamDan);**

/\* Kết quả:

\[

&#x20;   { id: 2, ten: 'Giày Sneaker', gia: 500000, ... },

&#x20;   { id: 3, ten: 'Quần Jean', gia: 350000, ... },

&#x20;   { id: 1, ten: 'Áo thun', gia: 150000, ... }

]

\*/

