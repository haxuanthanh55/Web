function apiTraCuuTask(ten){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(ten==="SapServer") reject(new Error("Lỗi kết nối máy chủ!"));
            if(ten!=="An") resolve([]);
            resolve([
                { congViec: "Thiết kế ERD", trangThai: "Hoàn thành" },
                { congViec: "Chuẩn hóa BCNF", trangThai: "Đang xử lý" }
            ]);
        },2000);
    });
}