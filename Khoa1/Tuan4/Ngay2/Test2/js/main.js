const buttonTai=document.querySelector('#btnTraCuu');
const ketQua=document.querySelector('#ketQua');
const inputMaBN = document.querySelector('#maBenhNhan');
buttonTai.addEventListener('click', async()=>{
    ketQua.innerHTML="<p>...Đang tải...</p>";
    try{
        const tuKhoa=inputMaBN.value;
        const data=await apiTraCuuLichKham(tuKhoa);
        if(data.length===0){
            ketQua.innerHTML="<p>Bệnh nhân chưa có lịch hẹn!</p>";
            return;
        }
        ketQua.innerHTML="";
        data.forEach(item => {
            ketQua.innerHTML += `
                <div style="border: 1px solid #ddd; padding: 10px; margin-bottom: 5px;">
                    <strong>Ngày khám:</strong> ${item.ngay} <br>
                    <strong>Bác sĩ:</strong> ${item.bacSi} - <strong>Phòng:</strong> ${item.phong}
                </div>
            `;
        });
    }catch(error){
        ketQua.innerHTML="Lỗi hệ thống!";
    }
})