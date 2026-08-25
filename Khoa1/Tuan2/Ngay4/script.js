var danhsach= [
    {id: 1, name: "Thành", diem: 7},
    {id: 2, name: "Tùng", diem: 8},
    {id: 3, name: "Hoàng", diem: 6},
    {id: 4, name: "Nam", diem: 2}
]

function taobang(mangDuLieu){
    // Đồng nhất sử dụng biến tên là 'chuoi'
    var chuoi = "<table border='1px'>";
    chuoi += "<tr><th>STT</th><th>Tên học viên</th><th>Điểm</th></tr>";
    
    for (var i = 0; i < mangDuLieu.length; i++) {
        chuoi += "<tr>";
        chuoi += "<td>" + mangDuLieu[i].id + "</td>";
        chuoi += "<td>" + mangDuLieu[i].name + "</td>";
        chuoi += "<td>" + mangDuLieu[i].diem + "</td>";
        chuoi += "</tr>";
    }
    chuoi += "</table>";
    return chuoi; // Trả về đúng biến 'chuoi'
}

function themmoi() {
    var hsmoi = { id: 5, name: "Phúc", diem: 9 };
    var danhsachmoi = [...danhsach, hsmoi];
    
    // Đổ chuỗi HTML vừa tạo vào thẻ có id="themmoi"
    document.getElementById('themmoi').innerHTML = taobang(danhsachmoi);
}