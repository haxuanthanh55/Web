//bài 1
const taiKhoan={
  chuThe:"Nguyễn Văn A",
  soDu:5000000,
  kiemTraSoDu: function(){
    return `Chủ tài khoản ${this.chuThe} hiện có ${this.soDu} VNĐ.`;
  }
};
console.log(taiKhoan.kiemTraSoDu());
//bài 2
class duAn{
  constructor(tenDuAn,nganSach){
    this.ten=tenDuAn;
    this.tien=nganSach;
  }
}
const duAnMoi=new duAn("Phần mềm HRM",1000);
console.log(duAnMoi.ten);
//bài 3
const admin={
  vaiTro:"Quản trị viên",
  xoaDuLieu:function(){
    return `Tài khoản [${this.vaiTro}] đã thực hiện xoá dữ liệu.`;
  }
};
const quanLy={
  vaiTro: "Quản lý cấp cao"
};
const hanhDong=admin.xoaDuLieu.call(quanLy);
console.log(hanhDong);





const thuongNong = 500;
const thuongQuy = 300;
const giamDoc={
  ten:"Sếp",
  tinhThuong:function(thuongNong,thuongQuy){
    return `${this.ten} duyệt tổng tiền thưởng: ${thuongNong + thuongQuy}`;
  }
};
const truongPhong ={ten:"Trưởng phòng Marketing"};
const ketQua=giamDoc.tinhThuong.apply(truongPhong),[thuongNong,thuongQuy];
console.log(ketQua);



const heThong={
  so:"000",
  thongBao:function(){
    return`Đang gửi tin nhắn từ tổng đài số: ${this.so}`;
  }
};
const soCaNhan={so:"999"};
const guiTinNhan=heThong.thongBao.bind(soCaNhan);
console.log(guiTinNhan());



function MayTinh(tenMay){
  this.ten=tenMay;
}
MayTinh.prototype.khoiDong=function(){
  return `Máy tính ${this.ten} đang khởi động...`;
};
const may1=new MayTinh("MacBook");
console.log(may1.khoiDong());