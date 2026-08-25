function quetTheNhanVien(maThe){
    return new Promise(function(resolve,reject){
        if(maThe==="LT-2026"){
            resolve("Xác thực lễ tân thành công. Mở khoá hệ thônsg!");
        }
        else{
            reject(new Error("Xác thực không thành công!"));
        }
    });
}
async function traCuuKhachVip(maThe,apiKhachHang) {
    try{
        const the= await quetTheNhanVien(maThe);
        console.log(the);
        const response= await fetch(apiKhachHang);
        if(!response.ok){
            throw new Error('Đường dẫn không đúng!');
        }
        const danhSachPhongVip=await response.json();
        console.log("Đã lấy được dữ liệu, danh sách phòng VIP: ");
        for(let i=0;i<=1;i++){
            console.log(danhSachPhongVip[i].name+" - "+danhSachPhongVip[i].company.name);
        }
    }catch(error){
        console.log("Sự cố:", error.message);
    }
}
// Kịch bản 1: Mọi thứ hoàn hảo (Thẻ đúng, API đúng)
traCuuKhachVip("LT-2026", "https://jsonplaceholder.typicode.com/users");

// Kịch bản 2: Lỗi quẹt thẻ (Thẻ sai, API đúng)
traCuuKhachVip("LT-9999", "https://jsonplaceholder.typicode.com/users");

// Kịch bản 3: Sập server (Thẻ đúng, API hỏng)
traCuuKhachVip("LT-2026", "https://jsonplaceholder.typicode.com/link-loi");