let task=[];
const form=document.querySelector('#formDangKi');
const listNV=document.querySelector('#listNhiemVu');

//lưu thông tin
function luuDuLieuTask(){
    const taskDuocLuu=JSON.stringify(task);
    localStorage.setItem('duLieuTask',taskDuocLuu);
}
//lấy thông tin
function layDuLieuTask(){
    const layDuLieu=localStorage.getItem('duLieuTask');
    if(layDuLieu){
        try{
            task=JSON.parse(layDuLieu);
        }
        catch{
            task=[];
        }
    }
}
//render
function render(){
    listNV.textContent="";
    for(let i=0;i<task.length;i++){
        const t=task[i];
        const list=document.createElement('li');
        const span=document.createElement('span');
        span.textContent=t.name;
        if(t.status===true){
            span.style.textDecoration="line-through";
        }
        //tạo button hoàn thành và button xoá
        const buttonDone=document.createElement('button');
        buttonDone.textContent="Hoàn thành";
        buttonDone.classList.add('done');
        buttonDone.dataset.id=t.id;
        
        const buttonDel=document.createElement('button')
        buttonDel.textContent="Xoá";
        buttonDel.classList.add('delete');
        buttonDel.dataset.id=t.id;

        list.appendChild(span);
        list.appendChild(buttonDone);
        list.appendChild(buttonDel);
        listNV.appendChild(list);
    }
}
//thêm vào danh sách
function addTask(name){
    task.push({
        id:Date.now(),
        name:name,
        status:false
    });
    luuDuLieuTask();
    render();
}
//chuyển trạng thái
function toggle(id){
    for(let i=0;i<task.length;i++){
        if(task[i].id===id){
            task[i].status=!task[i].status;
            break;
        }
    }
    luuDuLieuTask();
    render();
}
//xoá task
function deleteTask(id){
    task=task.filter(function(task){
        return task.id!==id;
    });
    luuDuLieuTask();
    render();
}

//event submit
const tenNV=document.querySelector('#tenNhiemVu');
const error=document.querySelector('#error');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const name=tenNV.value.trim();
    error.textContent="";
    //lỗi trống 
    if(name===""){
        error.textContent="Không được bỏ trống!!";
        tenNV.focus();
        return;
    }
    //lỗi trùng
    for(let i=0;i<task.length;i++){
        if(task[i].name.toLowerCase()===name.toLowerCase()){
            error.textContent="Nhiệm vụ này đã được đăng kí trước!!";
            tenNV.focus();
            return;
        }
    }
    //nếu thành công
    addTask(name);
    tenNV.value="";
    tenNV.focus();
});
//event click
listNV.addEventListener('click',function(e){
    const click=e.target;
    const id=Number(click.dataset.id);
    if(click.classList.contains('done')){
        toggle(id);
    }
    if(click.classList.contains('delete')){
        deleteTask(id);
    }
});
layDuLieuTask();
render();