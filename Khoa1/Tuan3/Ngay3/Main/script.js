const form= document.querySelector('#member-form');
const memberList= document.querySelector('#member-list');
//Lấy thẻ báo lỗi và thẻ input
const errorMsg=document.querySelector('#error-msg');
const inputName=document.querySelector('#member-name');
//bắt sự kiện submit của form và ngăn reload
form.addEventListener('submit',function(e){
    e.preventDefault();
    //Lấy dữ liệu name và cắt khoảng trắng bằng trim
    const name=inputName.value.trim();
    //validate 1
    if(name===""){
        errorMsg.textContent="Lỗi: không được để trống!";
        errorMsg.classList.add('show');
        inputName.focus();
        return;
    }
    //validate 2
    if(name.length<2){
        errorMsg.textContent="Lỗi: độ dài ký tự phải >2!";
        errorMsg.classList.add('show');
        inputName.focus();
        return;
    }
    const currentMem=document.querySelectorAll('#member-list span');
    for(let i=0;i<currentMem.length;i++){
        if(currentMem[i].textContent===name){
            errorMsg.textContent="Lỗi: tên bị trùng lặp!";
            errorMsg.classList.add('show');
            inputName.focus();
            return;
        }
    }
    //Nếu ko lỗi
    errorMsg.classList.remove('show');
    //tạo thẻ gán nội dung
    const list=document.createElement('li');
    const span=document.createElement('span');
    span.textContent=name;
    list.appendChild(span);
    memberList.appendChild(list);
    form.reset();
})
