const formSP=document.querySelector('#form-san-pham');
const template=document.querySelector('#khuon-sp');
const danhSach=document.querySelector('#danh-sach-sp');
formSP.addEventListener('submit',function(e){
  e.preventDefault();
  const tenSP=document.querySelector('#ten-sp').value;
  const giaSP=document.querySelector('#gia-sp').value;
  const banSao=template.content.cloneNode(true);
  banSao.querySelector('.ten').textContent=tenSP;
  banSao.querySelector('.gia').textContent=giaSP;
  danhSach.appendChild(banSao);
  formSP.reset();
});
danhSach.addEventListener('click',(e)=>{
  if(e.target.classList.contains('btn-xoa')){
    e.target.closest('.item-sp').remove();
  }
})