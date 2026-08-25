const form=document.querySelector('#form-dang-ky');
const inputTen=document.querySelector('#ten-bn');
const loiTen=document.querySelector('#loi-ten');
const inputTuoi=document.querySelector('#tuoi-bn');
const loiTuoi=document.querySelector('#loi-tuoi');
const template=document.querySelector('#khuon-bn');
const danhSach=document.querySelector('#danh-sach-kham');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  loiTen.textContent="";
  loiTuoi.textContent="";
  if(inputTen.value.trim()===""){
    loiTen.textContent="Tên bệnh nhân không được để trống!";
    inputTen.focus()
    return;
  }
  if(inputTen.value.trim().length<2){
    loiTen.textContent="Tên bệnh nhân không dưới 2 ký tự!";
    inputTen.focus()
    return;
  }
  if(inputTuoi.value===""){
    loiTuoi.textContent="Tuổi bệnh nhân không được để trống!";
    inputTuoi.focus();
    return;
  }
  if(inputTuoi.value <0 || inputTuoi.value>120){
    loiTuoi.textContent="Tuổi bệnh nhân phải từ 0 trở lên và không quá 120";
    inputTuoi.focus();
    return;
  }
  const banSao=template.content.cloneNode(true);
  banSao.querySelector('.ten-hien-thi').textContent=inputTen.value;
  banSao.querySelector('.tuoi-hien-thi').textContent=inputTuoi.value;
  danhSach.appendChild(banSao);
  form.reset();
});
