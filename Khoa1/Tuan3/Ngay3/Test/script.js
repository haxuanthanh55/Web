const form=document.querySelector('#patient-form');
const waitingList=document.querySelector('#waiting-list');

const tenBenhNhan=document.querySelector('#patient-name');
const Error=document.querySelector('#patient-error');
form.addEventListener('submit',function(e){
    e.preventDefault();
    //lấy tên bệnh nhân, trim dữ liệu
    const name=tenBenhNhan.value.trim();
    //validate 1
    if(name===""){
        Error.textContent="Lỗi: không được để trống!";
        Error.classList.add('show');
        tenBenhNhan.focus();
        return;
    }
    if(name.length<2){
        Error.textContent="Lỗi: Không nhập dưới 2 kí tự";
        Error.classList.add('show');
        tenBenhNhan.focus();
        return;
    }
    const fullDanhSach=document.querySelectorAll('#waiting-list span');
    for(let i=0;i<fullDanhSach.length;i++){
        if(name=== fullDanhSach[i].textContent){
            Error.textContent="Lỗi: bệnh nhân đã có trong danh sách";
            Error.classList.add('show');
            tenBenhNhan.focus();
            return;
        }
    }
    //nếu thành công
    Error.classList.remove('show');
    const list=document.createElement('li');
    const span=document.createElement('span');
    span.textContent=name;
    const buttonExam=document.createElement('button');
    const buttonCancel=document.createElement('button');
    buttonExam.textContent="Khám xong";
    buttonCancel.textContent="Huỷ";
    buttonExam.classList.add('btn-examined');
    buttonCancel.classList.add('btn-cancel');
    //
    list.appendChild(span);
    list.appendChild(buttonExam);
    list.appendChild(buttonCancel);
    waitingList.appendChild(list);
    form.reset();
});
waitingList.addEventListener('click',function(e){
    const click=e.target;
    if(click.classList.contains('btn-examined')){
        click.parentElement.classList.toggle('examined');
    }
    if(click.classList.contains('btn-cancel')){
        click.parentElement.remove();
    }
})