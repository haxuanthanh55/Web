import { danhSachHocVien } from "./data.js";
const taoBoDemMaHV=()=>{
  let soThuTu=0;
  return()=>{
    soThuTu=soThuTu+1;
    return "HV-"+soThuTu;
  }
}
const taoBoLocDiemSan=(diemSan)=>{
  return(hocVien)=>{
    return hocVien.diem>=diemSan;
  }
}
const layMa=taoBoDemMaHV();
console.log(layMa());
console.log(layMa());
const locQuaMon=taoBoLocDiemSan(5);
const danhSachQuaMon=danhSachHocVien.filter(locQuaMon);
