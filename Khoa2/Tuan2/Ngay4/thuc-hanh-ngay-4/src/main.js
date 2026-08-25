const form = document.querySelector('#form-task');
const inputTen = document.querySelector('#ten-task');
const btnLuu = document.querySelector('#btn-luu');
const template = document.querySelector('#khuon-task');
const danhSach = document.querySelector('#danh-sach-task');

// STATE: Trái tim của ứng dụng
let mangTask = []; 
let idDangSua = null; 

// HÀM VẼ GIAO DIỆN
const render = () => {
  danhSach.innerHTML = "";
  mangTask.forEach(task => {
    const banSao = template.content.cloneNode(true);
    banSao.querySelector('.noi-dung').textContent = task.tenTask;
    banSao.querySelector('.btn-sua').dataset.id = task.id;
    banSao.querySelector('.btn-xoa').dataset.id = task.id;
    danhSach.appendChild(banSao);
  });
}

// XỬ LÝ FORM: THÊM HOẶC SỬA
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (idDangSua === null) {
    // TẠI SAO DÙNG PUSH? Vì push() giúp nhét thêm 1 phần tử vào cuối mảng.
    const taskMoi = { id: Date.now(), tenTask: inputTen.value };
    
    // YÊU CẦU 1: Nhét taskMoi vào mangTask
    mangTask.push(taskMoi);

  } else {
    // TẠI SAO DÙNG MAP? Vì map() duyệt qua từng task. Nếu trúng task đang cần sửa thì nó tạo ra phiên bản mới với nội dung mới, còn không trúng thì nó giữ nguyên.
    
    // YÊU CẦU 2: Gán đè mangTask bằng mangTask.map(...). 
    // Điều kiện: Nếu task.id === idDangSua thì {...task, tenTask: inputTen.value}, ngược lại trả về task cũ.
    // [VIẾT CODE Ở ĐÂY]
    mangTask=mangTask.map(e=>
      e.id===idDangSua?{...e, tenTask:inputTen.value}:e);
    }

  
  idDangSua = null; 
  btnLuu.textContent = "Thêm Task"; 
  form.reset();
  render();
});

// XỬ LÝ NÚT BẤM: XÓA HOẶC CHUẨN BỊ SỬA
danhSach.addEventListener('click', (e) => {
  const idClick = Number(e.target.dataset.id);
  
  if (e.target.classList.contains('btn-xoa')) {
    // TẠI SAO DÙNG FILTER? Vì filter() sẽ "lọc" và chỉ giữ lại những task thỏa mãn điều kiện. Ở đây ta muốn giữ lại những task KHÁC VỚI task vừa bấm xóa.
    
    // YÊU CẦU 3: Gán đè mangTask bằng mangTask.filter(...)
    // Điều kiện: task.id !== idClick
    // [VIẾT CODE Ở ĐÂY]
    mangTask=mangTask.filter(e=>e.id!==idClick);
    
    render();
  }
  
  if (e.target.classList.contains('btn-sua')) {
    // TẠI SAO DÙNG FIND? Vì find() sẽ chạy đi tìm đúng cái task chứa id vừa bấm để lấy dữ liệu đổ lên form.
    
    // YÊU CẦU 4: Khai báo biến taskSua và dùng mangTask.find(...)
    // Điều kiện: task.id === idClick
    // [VIẾT CODE Ở ĐÂY]
    const taskSua=mangTask.find(e=>e.id===idClick);
    inputTen.value = taskSua.tenTask;
    idDangSua = idClick;
    btnLuu.textContent = "Cập nhật";
  }
});