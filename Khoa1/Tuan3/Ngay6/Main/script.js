let danhSachSanPham =[
    {maSP:"SP01",tenSP:"Laptop Dell",soLuong:50,dangGiamGia:false},
    {maSP:"SP02",tenSP:"Samsung A20",soLuong:20,dangGiamGia:true},
    {maSP:"SP03",tenSP:"Laptop Asus",soLuong:5,dangGiamGia:false},
    {maSP:"SP04",tenSP:"Iphone 12",soLuong:10,dangGiamGia:true},
    {maSP:"SP05",tenSP:"Lenovo LOQ",soLuong:38,dangGiamGia:true}
];
function timSanPhamTheoTen(tuKhoa){
    const tuKhoaChuan=tuKhoa.toLowerCase();
    const ketQua=danhSachSanPham.filter(function(e){
        const chuThuong=e.tenSP.toLowerCase();
        return chuThuong.includes(tuKhoaChuan);
    });
    console.log(ketQua);
}
function locSanPhamSapHet(){
    const ketQua=danhSachSanPham.filter(function(e){
        return e.soLuong<10;
    });
    console.log(ketQua);
}

function timSanPhamGiamGiaTheoTen(tuKhoa){
    const tuKhoaChuan=tuKhoa.toLowerCase();
    const ketQua=danhSachSanPham.filter(function(e){
        const chuThuong=e.tenSP.toLowerCase();
        return chuThuong.includes(tuKhoaChuan) && e.dangGiamGia===true;
    });
    console.log(ketQua);
}

timSanPhamGiamGiaTheoTen("LapTop Asus");
locSanPhamSapHet();
timSanPhamTheoTen("Lenovo LOQ");