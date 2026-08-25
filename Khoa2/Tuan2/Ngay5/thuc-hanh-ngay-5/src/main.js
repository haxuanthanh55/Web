import { layDuLieu,luuDuLieu } from "./data.js";
const form = document.querySelector('#form-benh-nhan');
const inputTen = document.querySelector('#ten-bn');
const inputTim = document.querySelector('#o-tim-kiem');
const danhSach = document.querySelector('#danh-sach');
const template = document.querySelector('#khuon');
//khởi tạo mảng bệnh nhân
let mangBenhNhan=layDuLieu();
const render=(mangCanVe)=>{
  danhSach.innerHTML="";
  mangCanVe.forEach(bn=>{
    const banSao=template.content.cloneNode(true);
    banSao.querySelector('.ten-hien-thi').textContent=bn.ten;
    danhSach.appendChild(banSao);
  });
}
render(mangBenhNhan);
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const bnMoi={id:Date.now(),ten:inputTen.value};
  mangBenhNhan.push(bnMoi);
  luuDuLieu(mangBenhNhan);
  form.reset();
  render(mangBenhNhan);
});
inputTim.addEventListener('input',()=>{
  const tuKhoa=inputTim.value.toLowerCase();
  const mangKetQua=mangBenhNhan.filter(bn=>bn.ten.toLowerCase().includes(tuKhoa));
  render(mangKetQua);
});