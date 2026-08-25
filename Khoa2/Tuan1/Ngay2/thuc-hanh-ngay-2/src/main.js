import { danhSachHocVien } from "./data.js";
const hocVienDangHoc=danhSachHocVien.filter(item=>item.trangThai==="Đang học");
const hocVienTieuBieu= danhSachHocVien.filter(item=>item.trangThai==="Đang học").sort((a,b)=>b.diem-a.diem);
const diemTrungBinh=hocVienDangHoc.reduce((tong,item)=>tong+item.diem,0)/hocVienDangHoc.length;