import {mangBenhNhan} from "./data.js";
const template=document.querySelector('#khuon-benh-nhan');
const danhSachCho=document.querySelector('#danh-sach-cho');
mangBenhNhan.forEach(bn => {
  const banSao=template.content.cloneNode(true);
  banSao.querySelector('.ten-bn').textContent=bn.ten;
  banSao.querySelector('.trieu-chung').textContent=bn.trieuChung;
  const buttonGoi=banSao.querySelector('.btn-goi');
  buttonGoi.dataset.id=bn.id;
  if(bn.trieuChung==="Sốt cao"){
    const phieuKham=banSao.querySelector('.phieu-kham');
    phieuKham.classList.add('uu-tien');
  }
  danhSachCho.appendChild(banSao);
});
