const form=document.querySelector('#patient-form');
const waitingList=document.querySelector('#waiting-list');
form.addEventListener('submit',function(e){
    const click=e.target;
    e.preventDefault();
    const name=document.querySelector('#patient-name').value;
    const check=document.querySelector('#is-vip').checked;
    const list=document.createElement('li');
    const span=document.createElement('span');
    const buttonCompleted=document.createElement('button');
    const buttonDelete=document.createElement('button');
    span.textContent=name;
    list.appendChild(span);
    list.appendChild(buttonCompleted);
    list.appendChild(buttonDelete);
    waitingList.appendChild(list);
    buttonCompleted.classList.add('btn-examined');
    buttonDelete.classList.add('btn-cancel');
    buttonCompleted.textContent="Khám xong";
    buttonDelete.textContent="Huỷ";
    if(check){
        span.classList.add('vip');
    }
    form.reset();
})
waitingList.addEventListener('click',function(e){
    const clickE=e.target;
    if(clickE.classList.contains('btn-cancel')){
        clickE.parentElement.remove();
    }
    if(clickE.classList.contains('btn-examined')){
        clickE.parentElement.classList.toggle('examined');
    }
})


