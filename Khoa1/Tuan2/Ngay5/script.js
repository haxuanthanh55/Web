const gioHang = [
    { id: 1, ten: "Áo thun", gia: 150000, loai: "QuanAo" },
    { id: 2, ten: "Giày Sneaker", gia: 500000, loai: "GiayDep" },
    { id: 3, ten: "Quần Jean", gia: 350000, loai: "QuanAo" }
];

const danhsach= gioHang.filter(sanPham=>sanPham.loai==="QuanAo")