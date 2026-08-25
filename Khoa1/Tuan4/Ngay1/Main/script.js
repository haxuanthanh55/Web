function khoiTaoHeThong(maBaoMat){
    return new Promise(function(resolve, reject){
        if(maBaoMat===123){
            resolve("Khởi tạo hệ thống thành công!");
        }
        else{
            reject(new Error("Lỗi: Mã bảo mật không hợp lệ!"));        }
    });
}
async function hienThiDanhSach(maBaoMat,duongDan) {
    try{
        const khoiTao=await khoiTaoHeThong(maBaoMat);
        console.log(khoiTao);

        const response= await fetch(duongDan);
        if(!response.ok){
            throw new Error('Đường dẫn không đúng!');
        }
        const danhSach=await response.json();
        console.log("Đã lấy được dữ liệu, danh sách: ");
        for(let i=0;i<=2;i++){
            console.log(danhSach[i].title + " | " + danhSach[i].category + " | $" + danhSach[i].price);
        }
    }catch(error){
        console.log("Lỗi: không lấy được dữ liệu", error.message);
    }
}
hienThiDanhSach(123, 'https://fakestoreapi.com/products');
hienThiDanhSach(123, 'https://fakestoreapi.com/link-bi-sai.json');