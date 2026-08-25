// 1. STATE & DOM SELECTORS
let services = [];
const form = document.querySelector('#service-form');
const input = document.querySelector('#service-name');
const errorMsg = document.querySelector('#service-error'); // Móc DOM thẻ báo lỗi
const serviceList = document.querySelector('#service-list');

// 2. RENDER (Ngày 1, 4)
function render() {
    serviceList.textContent = "";
    for (let i = 0; i < services.length; i++) {
        const t = services[i];
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = t.name;
        if (t.status === true) span.classList.add('done');
        
        const btnDone = document.createElement('button');
        btnDone.textContent = "Xong";
        btnDone.classList.add('btn-done');
        btnDone.dataset.id = t.id;
        
        const btnCancel = document.createElement('button');
        btnCancel.textContent = "Huỷ";
        btnCancel.classList.add('btn-cancel');
        btnCancel.dataset.id = t.id;
        
        li.appendChild(span);
        li.appendChild(btnDone);
        li.appendChild(btnCancel);
        serviceList.appendChild(li);
    }
}

// 3. CRUD (Ngày 4)
function addService(name) {
    services.push({ id: Date.now(), name: name, status: false });
    render();
}

function toggleService(id) {
    for (let i = 0; i < services.length; i++) {
        if (services[i].id === id) {
            services[i].status = !services[i].status;
            break; 
        }
    }
    render();
}

function deleteService(id) {
    services = services.filter(function(s) { return s.id !== id; });
    render();
}

// 4. VALIDATE & SUBMIT (Ngày 2, 3)
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = input.value.trim();
    
    // Reset thông báo lỗi mỗi lần bấm Submit
    errorMsg.textContent = "";
    
    // Validate 1: Kiểm tra rỗng
    if (name === "") {
        errorMsg.textContent = "Lỗi: Vui lòng nhập tên dịch vụ!";
        input.focus();
        return;
    }
    
    // Validate 2: Kiểm tra trùng tên
    for (let i = 0; i < services.length; i++) {
        if (services[i].name.toLowerCase() === name.toLowerCase()) {
            errorMsg.textContent = "Lỗi: Yêu cầu này đã tồn tại!";
            input.focus();
            return; 
        }
    }

    // Hợp lệ: Thêm dữ liệu và reset form
    addService(name);
    input.value = "";
    input.focus();
});

// 5. EVENT DELEGATION (Ngày 2)
serviceList.addEventListener('click', function(e) {
    const click = e.target;
    const id = Number(click.dataset.id);
    
    if (click.classList.contains('btn-done')) toggleService(id);
    if (click.classList.contains('btn-cancel')) deleteService(id);
});