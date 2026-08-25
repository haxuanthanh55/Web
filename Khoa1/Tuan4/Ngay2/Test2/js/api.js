function apiTraCuuLichKham(maBN){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(maBN==="123") reject(new Error("Mất kết nối Database phòng khám!"));
            if(maBN!=="BN01")resolve([]);
            resolve([
                { ngay: "10/05/2026", bacSi: "BS. Trần Văn A", phong: "P.102" },
                { ngay: "15/05/2026", bacSi: "BS. Lê Thị B", phong: "P.205" }
            ]);
        },1500); //đợi 1.5s
    });
}